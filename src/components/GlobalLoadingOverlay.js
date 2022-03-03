
import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import {useSelector} from 'react-redux'

function GlobalLoadingOverlay() {
    const loading = useSelector(state=>state.feedback.loading)
  return (
    <LoadingOverlay
    active={loading}
    spinner
    styles={{
        overlay: (base) => ({
            ...base,
            background: 'rgba(13, 110, 253, 0.5)',
            height: '100vh'
        })
    }}
/>
  )
}

export default GlobalLoadingOverlay