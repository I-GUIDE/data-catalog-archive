import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Geojson_Checksum_Normalized, Maybe, ObjectId } from "./types"

// this is not exactly correct, but it is close enough for now. Note the creators and files
export type SearchResource = Pick<Geojson_Checksum_Normalized, "_id" | "id" | "title" | "abstract" | "creators" | "files" | "created">

export type SearchResources = {
    geojson_checksum_normalizeds: Array<Maybe<SearchResource>>
}

export type SearchResourcesVars = {
    term: string
    limit?: number
}

export type SearchResourceFiles = {
    nFiles: number
    size: number
}

export type SearchResourceResult = SearchResource & SearchResourceFiles
export type SearchResourcesResults = Array<SearchResourceResult> | undefined


export const GET_RESOURCES = gql`
    query Resources($limit: Int, $after: ObjectId){
        geojson_checksum_normalizeds(limit: $limit, query: { title_exists: true, _id_gt: $after}, sortBy: _ID_ASC){
              _id
                id
                title
                abstract
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
            data.geojson_checksum_normalizeds.map(value => ({
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
                after: data.geojson_checksum_normalizeds ? data?.geojson_checksum_normalizeds[data.geojson_checksum_normalizeds.length - 1]._id : undefined
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
export function useSearch({ term, limit }: SearchResourcesVars) {
    const [results, setResults] = useState<SearchResourcesResults | undefined>()

    const { data, ...rest } = useQuery<SearchResources, SearchResourcesVars>(SEARCH_RESOURCES, { variables: { term: term, limit: limit } })

    useEffect(() => {
        setResults(
            data?.geojson_checksum_normalizeds.map(value => ({
                ...value, nFiles: value?.files?.length ?? 0, size: value?.files?.reduce<number>((acc, curr) => acc + (curr?.size ?? 0), 0) ?? 0
            })
            )
        )
    }, [data])

    return { ...rest, data, results }
}

