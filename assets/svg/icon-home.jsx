import * as React from "react"
import {string, number} from 'prop-types'

/**
 * -- PROPS ENTRIES --
 * @size prop int - ex: 26
 * @color prop string - ex: '#6744ac'
 * @viewBox prop int - ex: 24
 * @return IconHome
 */
export default function IconHome({size, color, viewBox}) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            width={size}
            height={size}
        >
            <path fill="none" d="M0 0h24v24H0z"/>
            <path fill={color}
                  d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
        </svg>
    )
}

IconHome.prototype = {
    size: number,
    color: string,
    viewBox: number
}

IconHome.defaultProps = {
    size: 24,
    color: '#6744ac',
    viewBox: 24
}


