import * as React from "react"
import {string, number} from 'prop-types'

/**
 * -- PROPS ENTRIES --
 * @size prop int - ex: 26
 * @color prop string - ex: '#6744ac'
 * @viewBox prop int - ex: 24
 * @return IconContact
 */
export default function IconContact({size, color, viewBox}) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            width={size}
            height={size}
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={color}
                  d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/>
        </svg>
    )
}

IconContact.prototype = {
    size: number,
    color: string,
    viewBox: number
}

IconContact.defaultProps = {
    size: 24,
    color: '#6744ac',
    viewBox: 24
}


