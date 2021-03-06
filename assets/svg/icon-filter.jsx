import * as React from "react";
import {string, number} from 'prop-types';

/**
 * -- PROPS ENTRIES --
 * @size prop int - ex: 26
 * @color prop string - ex: '#6744ac'
 * @viewBox prop int - ex: 24
 * @return IconApartament
 */
export default function IconFilter({size, color, viewBox}) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            width={size}
            height={size}
        >
            <path fill="none"  d="M0 0h24v24H0z"/>
            <path fill={color}
                  d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
        </svg>
    )
}

IconFilter.prototype = {
    size: number,
    color: string,
    viewBox: number
}

IconFilter.defaultProps = {
    size: 24,
    color: '#6744ac',
    viewBox: 24
}


