import { gql, useQuery, DocumentNode, useLazyQuery } from "@apollo/client";
import { useState, useEffect, useCallback } from "react";
import { SearchResources, SearchResourcesResults } from "./queries";
import { Geojson_Checksum_Relation, Maybe, ObjectId } from "./types";

export const GET_NOTEBOOK_RESOURCES = gql`
    query GetNotebookResources($limit: Int, $after: ObjectId){
        geojson_checksum_relations(limit: $limit, query: {files: {mime_type_in: ["application/ipynb"]}, _id_gt: $after, }, sortBy: _ID_ASC){
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

export type GetNotebookResourcesVars = {
    limit?: number
    after?: ObjectId
}


function UseResources<T extends DocumentNode>(query: T) {
    return function useResources(limit: number = 25) {
        const [results, setResults] = useState<SearchResourcesResults | undefined>()
        const { data, ...rest } = useQuery<SearchResources, GetNotebookResourcesVars>(query, { variables: { limit: limit } })

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
}

export const useGetNotebookResources = UseResources(GET_NOTEBOOK_RESOURCES)

export const SEARCH_NOTEBOOK_RESOURCES = gql`
    query Search($term: String!, $mime_types: [String]!, $limit: Float){
        search_filter_by_mime_type(input: {term: $term, mime_types: $mime_types, limit: $limit}){
            id,
            title,
            abstract,
            creators {
                name
            },
            files {
                size
            },
            created
        }
    }
`

export type SearchNotebookResource = Pick<Geojson_Checksum_Relation, "id" | "title" | "abstract" | "creators" | "files" | "created">

export type SearchNotebookResources = {
    search_filter_by_mime_type: Array<Maybe<SearchNotebookResource>>
}

export type SearchNotebookResourcesVars = {
    term: string
    mime_types: string[]
    limit?: number
}


export function useSearchNotebookResources(limit: number = 48) {
    const searchLimit = limit
    const [results, setResults] = useState<SearchResourcesResults | undefined>()
    const [q, { data, ...rest }] = useLazyQuery<SearchNotebookResources, SearchNotebookResourcesVars>(SEARCH_NOTEBOOK_RESOURCES)

    const useQuery = useCallback((term: string, limit?: number) => {
        // limit results to resources that have notebooks
        q({ variables: { term: term, mime_types: ["application/ipynb"], limit: limit ?? searchLimit } })
    }, [q, searchLimit])

    useEffect(() => {
        setResults(
            data?.search_filter_by_mime_type.map(value => ({
                ...value, nFiles: value?.files?.length ?? 0, size: value?.files?.reduce<number>((acc, curr) => acc + (curr?.size ?? 0), 0) ?? 0
            })
            )
        )
    }, [data])

    return { ...rest, data, results, useQuery }
}
