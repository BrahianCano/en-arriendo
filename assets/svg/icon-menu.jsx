import * as React from "react"
import { string, number } from 'prop-types'

const colors = require("tailwindcss/colors");


export default function IconMenu(props) {
    const { size, color, viewBox } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            width={size}
            height={size}
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill={color} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
    )
}

IconMenu.prototype = {
    size : number,
    color : string,
    viewBox : number
}

IconMenu.defaultProps = {
    size : 26,
    color : colors.primary[50],
    viewBox : 24
}


