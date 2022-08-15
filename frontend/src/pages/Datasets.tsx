import React, { useEffect, useState } from 'react'
import { ListItem, List, CircularProgress } from '@mui/material'
import SearchItem, { Props as SearchProps } from '../components/SearchItem'
import { useGetResources } from '../graphql/queries'
import { useQuery } from '@apollo/client'


export default function Datasets() {
    const { results, loading, error } = useGetResources()
    console.log(error)

    if (loading) return <CircularProgress />

    return <List>
        {
            results?.map((value, idx) => {
                return <ListItem key={idx.toString()}>
                    <SearchItem cardProps={{ sx: { width: "100%" } }} props={{ ...value }} />
                </ListItem>
            })
        }
    </List>
}
