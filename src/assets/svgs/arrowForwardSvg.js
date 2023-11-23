import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const ArrowForwardSVGComponent = (props) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1_3852)">
            <Path
                d="M5.33341 8.00004L10.6667 8.00004M10.6667 8.00004L8.33342 5.66671M10.6667 8.00004L8.33341 10.3334"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M8.00008 1.33329C4.31819 1.33329 1.33342 4.31806 1.33342 7.99996C1.33342 11.6819 4.31818 14.6666 8.00008 14.6666C11.682 14.6666 14.6667 11.6819 14.6667 7.99996C14.6667 4.31806 11.682 1.33329 8.00008 1.33329Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_3852">
                <Rect
                    width={16}
                    height={16}
                    fill="white"
                    transform="translate(16 16) rotate(-180)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default ArrowForwardSVGComponent;
