import * as React from "react";
import {string, number} from 'props-type';

/**
 * -- PROPS ENTRIES --
 * @size prop int - ex: 26
 * @color prop string - ex: '#6744ac'
 * @viewBox prop int - ex: 24
 * @return IconClose
 */
export default function IconBed({size, color, viewBox}) {

return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        width={size}
        height={size}
    >
            <path fill="none"  d="M0 0h24v24H0z" />
    <path  fill={color} d="M12 3L4 9v12h16V9l-8-6zm-2.25 9.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H15c1.1 0 2 .9 2 2v4z" />


        </svg>
)
}

IconBed.prototype = {
size: number,
color: string,
viewBox: number
}

IconBed.defaultProps = {
size: 24,
color: '#6744ac',
viewBox: 24
}


