import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const CrossSVGComponent = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect
            x={9.90039}
            width={14}
            height={14}
            rx={7}
            transform="rotate(45 9.90039 0)"
            fill="#CCCCCC"
        />
        <Path
            d="M8.13262 8.13178L9.90039 9.89955M11.6682 11.6673L9.90039 9.89955M9.90039 9.89955L11.6682 8.13178M9.90039 9.89955L8.13262 11.6673"
            stroke="white"
            strokeWidth={0.625}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default CrossSVGComponent;
