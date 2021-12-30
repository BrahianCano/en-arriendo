import * as React from "react";
import {string, number} from 'props-type';

/**
 * -- PROPS ENTRIES --
 * @size prop int - ex: 26
 * @color prop string - ex: '#6744ac'
 * @viewBox prop int - ex: 24
 * @return IconApartament
 */
export default function IconApartament({size, color, viewBox}) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            width={size}
            height={size}
        >
            <path fill="none" d="M0 0h24v24H0z"/>
            <path fill={color}
                  d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
        </svg>
    )
}

IconApartament.prototype = {
    size: number,
    color: string,
    viewBox: number
}

IconApartament.defaultProps = {
    size: 24,
    color: '#6744ac',
    viewBox: 24
}


