import * as React from "react";
import {string, number} from 'props-type';

/**
 * -- PROPS ENTRIES --
 * @size prop int - ex: 26
 * @color prop string - ex: '#6744ac'
 * @viewBox prop int - ex: 24
 * @return IconLocal
 */
export default function IconLocal({size, color, viewBox}) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            width={size}
            height={size}
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={color}
                  d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z"/>
        </svg>
    )
}

IconLocal.prototype = {
    size: number,
    color: string,
    viewBox: number
}

IconLocal.defaultProps = {
    size: 24,
    color: '#6744ac',
    viewBox: 24
}


