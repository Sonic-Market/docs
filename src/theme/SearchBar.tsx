import OriginalSearchBar from '@theme-original/SearchBar'
import React from 'react'

export default function SearchBarWithAnalytics(props) {
  return (
    <>
      {/* Required for onClick to register */}
      <div>
        <OriginalSearchBar {...props} />
      </div>
    </>
  )
}
