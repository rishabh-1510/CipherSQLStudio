import Editor from '@monaco-editor/react'

import React from 'react'

const SqlEditor = ({query , setQuery}) => {
    return (
        <Editor
            height="300px"
            defaultLanguage="sql"
            theme="vs-dark"
            value={query}
            onChange={(value) => setQuery(value)}
        />
    )
}

export default SqlEditor