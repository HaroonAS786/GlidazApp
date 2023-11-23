import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SortSVGComponent = (props) => (
    <Svg
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M3 7.5H21"
            stroke="#6B7386"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M6 12.5H18"
            stroke="#6B7386"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M10 17.5H14"
            stroke="#6B7386"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
    </Svg>
);
export default SortSVGComponent;
