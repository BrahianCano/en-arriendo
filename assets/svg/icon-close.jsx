import * as React from "react";
import {string, number} from 'prop-types';

/**
 * -- PROPS ENTRIES --
 * @size prop int - ex: 26
 * @color prop string - ex: '#6744ac'
 * @viewBox prop int - ex: 24
 * @return IconClose
 */
export default function IconClose({size, color, viewBox}) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            width={size}
            height={size}
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={color}
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
    )
}

IconClose.prototype = {
    size: number,
    color: string,
    viewBox: number
}

IconClose.defaultProps = {
    size: 24,
    color: '#6744ac',
    viewBox: 24
}


