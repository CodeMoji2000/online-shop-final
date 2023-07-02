import React from 'react'

function Holder({children}) {
    return (
    <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
        <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
            {children}
        </div>
     </div>
    )
}

export default Holder

