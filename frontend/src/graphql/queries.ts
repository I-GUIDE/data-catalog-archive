import { gql, useLazyQuery, useQuery } from "@apollo/client"
import { useEffect, useState, useCallback } from "react"
import { Geojson_Checksum_Relation, Maybe, ObjectId } from "./types"

// this is not exactly correct, but it is close enough for now. Note the creators and files
export type SearchResource = Pick<Geojson_Checksum_Relation, "_id" | "id" | "title" | "abstract" | "creators" | "files" | "created" | "type">
export type RelationsSearch = Pick<Geojson_Checksum_Relation, "filter_relations">

export type SearchSingleResource = {
    geojson_checksum_relation: Maybe<SearchResource>
}

export type RelationsSearchReturnT = {
    geojson_checksum_relation: Maybe<RelationsSearch>
}

export type SearchResources = {
    // geojson_checksum_normalizeds: Array<Maybe<SearchResource>>
    geojson_checksum_relations: Array<Maybe<SearchResource>>
}

export type TitleSearchResources = {
    title_abstract_search: Array<Maybe<SearchResource>>
}

export type SearchResourcesVars = {
    term: string
    limit?: number
}

type RelationsSearchVars = {
    id: string
}

export type SearchResourceFiles = {
    nFiles: number
    size: number
}

export type SearchResourceResult = SearchResource & SearchResourceFiles
export type SearchResourcesResults = Array<SearchResourceResult> | undefined


export const GET_RESOURCES = gql`
    query Resources($limit: Int, $after: ObjectId){
        geojson_checksum_relations(limit: $limit, query: { title_exists: true, _id_gt: $after}, sortBy: _ID_ASC){
              _id
                id
                title
                abstract
                type
                creators {
                    name
                }
                files {
                    size
                }
                created
        }
    }
`

// this is not exactly correct, but it is close enough for now. Note the creators and files
// export type GetResources = Pick<Geojson_Checksum_Normalized, "_id" | "id" | "title" | >

export type GetResourcesVars = {
    limit?: number
    after?: ObjectId
}


export function useGetResources(limit: number = 25) {
    const [results, setResults] = useState<SearchResourcesResults | undefined>()
    const { data, ...rest } = useQuery<SearchResources, GetResourcesVars>(GET_RESOURCES, { variables: { limit: limit } })

    // derive nFiles and size from data
    useEffect(() => {
        if (data === undefined) return

        setResults(
            data.geojson_checksum_relations.map(value => ({
                ...value, nFiles: value?.files?.length ?? 0, size: value?.files?.reduce<number>((acc, curr) => acc + (curr?.size ?? 0), 0) ?? 0
            })
            )
        )
    }, [data])

    const fetchMore = () => {
        if (data === undefined) return

        rest.fetchMore({
            variables: {
                // can be ignored b.c. check that data is not null. this could be a data race condition though that does not hold
                // @ts-ignore
                after: data.geojson_checksum_relations ? data?.geojson_checksum_relations[data.geojson_checksum_relations.length - 1]._id : undefined
            }
        })
    }

    return { ...rest, results, data, fetchMore }
}


export const SEARCH_RESOURCES = gql`
    query Search($term: String!, $limit: Float){
        title_abstract_search(input: {term: $term, limit: $limit}){
            id,
            title,
            type,
            abstract,
            creators {
                hydroshare_user_id
                name
            },
            files {
                size
            },
            created
        }
    }
`


// export function useSearch({ term, limit }: SearchResourcesVars): QueryResult<SearchResources, SearchResourcesVars> | SearchResourcesResults {
// export function useSearch({ term, limit }: SearchResourcesVars) {
//     const [results, setResults] = useState<SearchResourcesResults | undefined>()

//     const { data, ...rest } = useQuery<SearchResources, SearchResourcesVars>(SEARCH_RESOURCES, { variables: { term: term, limit: limit } })

//     useEffect(() => {
//         setResults(
//             data?.geojson_checksum_normalizeds.map(value => ({
//                 ...value, nFiles: value?.files?.length ?? 0, size: value?.files?.reduce<number>((acc, curr) => acc + (curr?.size ?? 0), 0) ?? 0
//             })
//             )
//         )
//     }, [data])

//     return { ...rest, data, results }
// }


export function useSearch(limit?: number) {
    const searchLimit = limit
    const [results, setResults] = useState<SearchResourcesResults | undefined>()
    const [query, { data, ...rest }] = useLazyQuery<TitleSearchResources, SearchResourcesVars>(SEARCH_RESOURCES)

    const useQuery = useCallback((term: string, limit?: number) => {
        query({ variables: { term: term, limit: limit ?? searchLimit } })
    }, [query, searchLimit])

    useEffect(() => {
        setResults(
            data?.title_abstract_search.map(value => ({
                ...value, nFiles: value?.files?.length ?? 0, size: value?.files?.reduce<number>((acc, curr) => acc + (curr?.size ?? 0), 0) ?? 0
            })
            )
        )
    }, [data])

    return { ...rest, data, results, useQuery }
}


export const RELATIONS_SEARCH = gql`
    query RelationsSearch($id: String!){
        geojson_checksum_relation(query: {id: $id}) {
            filter_relations(input: {types: ["hasPart", "isPartOf"]}) {
                type
                value
                relationsResolver{
                    title
                }
            }
        }
    }
`

export type RelationsSearchResult = {
    id?: Maybe<string>
    title?: Maybe<string>
    type?: Maybe<string>
}

export function useRelationsSearch() {
    const [results, setResults] = useState<RelationsSearchResult[] | undefined>()
    const [query, { data, ...rest }] = useLazyQuery<RelationsSearchReturnT, RelationsSearchVars>(RELATIONS_SEARCH)

    const doQuery = useCallback((id: string) => {
        query({ variables: { id: id } })
    }, [query])

    useEffect(() => {
        setResults(
            data?.geojson_checksum_relation?.filter_relations?.map(r => ({ id: r?.value, title: r?.relationsResolver?.title, type: r?.type }))
        )
    }, [data])


    return { ...rest, data, doQuery, results }
}

export type GetResourceVars = {
    id: string
}

export function useGetResource(id: string) {
    const [results, setResults] = useState<SearchResourceResult | undefined>()
    const { data, ...rest } = useQuery<SearchSingleResource, GetResourceVars>(GET_RESOURCE, { variables: { id } })

    // derive nFiles and size from data
    useEffect(() => {
        if (data === undefined) return

        setResults(
            { ...data.geojson_checksum_relation, nFiles: data.geojson_checksum_relation?.files?.length ?? 0, size: data.geojson_checksum_relation?.files?.reduce<number>((acc, curr) => acc + (curr?.size ?? 0), 0) ?? 0 }
        )
    }, [data])

    return { ...rest, results, data }
}


export const GET_RESOURCE = gql`
    query GetResource($id: String!){
        geojson_checksum_relation(query: {id: $id}){
              _id
                id
                title
                abstract
                type
                creators {
                    name
                }
                files {
                    size
                }
                created
        }
    }
`
