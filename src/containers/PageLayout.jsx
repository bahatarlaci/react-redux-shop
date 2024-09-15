import React from 'react'

const PageContainers = ({ children }) => {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-5'>{children}</div>
    )
}

export default PageContainers