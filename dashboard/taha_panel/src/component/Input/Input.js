import React from 'react'

function Input({children ,setValue,constValue}) {
    return (
        <>
            <label className="tw-flex tw-text-right">{children}</label>
            <input
              type="text"
              className=" tw-border-2 tw-text-sm tw-border-green-600 tw-w-full lg:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2"
              placeholder={children}
              onChange={(e)=>{setValue(e.target.value)}}
              value={constValue}
            />
        </>
    )
}

export default Input
