import * as React from "react"
import { string, number } from 'prop-types'


export default function IconHome(props) {
    const { size, color, viewBox } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            width={size}
            height={size}
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill={color} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
    )
}

IconHome.prototype = {
    size : number,
    color : string,
    viewBox : number
}

IconHome.defaultProps = {
    size : 26,
    color : '#6744ac',
    viewBox : 24
}


