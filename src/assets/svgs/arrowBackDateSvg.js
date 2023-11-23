import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";


const ArrowBackDateSvgSVGComponent = (props) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1_3838)">
            <Path
                d="M10.6666 7.99996H5.33325M5.33325 7.99996L7.66659 10.3333M5.33325 7.99996L7.66659 5.66663"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_3838">
                <Rect width={16} height={16} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default ArrowBackDateSvgSVGComponent;
