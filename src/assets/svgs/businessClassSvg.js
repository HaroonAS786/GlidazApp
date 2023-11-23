import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";

const BusinessClassSVGComponent = (props) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Mask
            id="mask0_1_3954"
            style={{
                maskType: "luminance",
            }}
            maskUnits="userSpaceOnUse"
            x={1}
            y={0}
            width={16}
            height={18}
        >
            <Path
                d="M9 7.5C10.6569 7.5 12 6.15685 12 4.5C12 2.84315 10.6569 1.5 9 1.5C7.34315 1.5 6 2.84315 6 4.5C6 6.15685 7.34315 7.5 9 7.5Z"
                fill="white"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M15.75 16.5C15.75 12.7721 12.7279 9.75 9 9.75C5.27213 9.75 2.25 12.7721 2.25 16.5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9 16.5L10.5 14.625L9 9.75L7.5 14.625L9 16.5Z"
                fill="white"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Mask>
        <G mask="url(#mask0_1_3954)">
            <Path d="M0 0H18V18H0V0Z" fill="#12B3A8" />
        </G>
    </Svg>
);
export default BusinessClassSVGComponent;
