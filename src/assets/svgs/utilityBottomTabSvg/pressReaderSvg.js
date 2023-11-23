import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PressReaderSVGComponent = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M8 3V11L10.5 9.4L13 11V3"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M6 17L20 17"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M6 21L20 21"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default PressReaderSVGComponent;