import React from 'react'
import PropTypes from 'prop-types'

function CardTitle({children}) {
    return (
    <section className="tw-pt-10 tw-text-center " style={{fontFamily: "Lalezar"}}>
        <h4 className="tw-text-4xl tw-font-bold tw-text-gray-500">:{children}</h4>
    </section>
    )
}

export default CardTitle

