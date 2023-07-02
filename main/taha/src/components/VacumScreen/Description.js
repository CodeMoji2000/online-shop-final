import React from 'react'

function Description({children}) {
    return (
        <section className="tw-mt-8 tw-text-center tw-flex tw-justify-center">
        <div className="tw-w-8/12 tw-space-y-8 tw-text-xl">
            {children}
        </div>
    </section>
    )
}

export default Description

