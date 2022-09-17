import React from 'react'
import MeilisearchContextProvider from '../../contexts/meilisearch-context/meilisearch-context'

export const wrapPageElement = ({ element }) => {
    return <div>
        <MeilisearchContextProvider>{element}</MeilisearchContextProvider>
    </div>
}