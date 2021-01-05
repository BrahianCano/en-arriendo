import * as React from "react";
import {string, number} from 'prop-types';

/**
 * -- PROPS ENTRIES --
 * @size prop int - ex: 26
 * @color prop string - ex: '#6744ac'
 * @viewBox prop int - ex: 24
 * @return IconEstate
 */
export default function IconEstate({size, color, viewBox}) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            width={size}
            height={size}
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={color} d="M8.17 5.7L1 10.48V21h5v-8h4v8h5V10.25z"/>
            <path d="M17 7h2v2h-2z" fill="none"/>
            <path fill={color} d="M10 3v1.51l2 1.33L13.73 7H15v.85l2 1.34V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"/>
        </svg>
    )
}

IconEstate.prototype = {
    size: number,
    color: string,
    viewBox: number
}

IconEstate.defaultProps = {
    size: 24,
    color: '#6744ac',
    viewBox: 24
}


