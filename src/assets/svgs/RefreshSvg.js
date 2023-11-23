import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const RefreshSVGComponent = (props) => (
    <Svg
        width={10}
        height={10}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={10} height={10} rx={5} fill="#B0B0B0" fillOpacity={0.6} />
        <G clipPath="url(#clip0_1_3394)">
            <Path
                d="M6.90979 4.16663C6.5883 3.43083 5.8541 2.91663 4.9998 2.91663C3.91952 2.91663 3.03128 3.73885 2.92676 4.79163"
                stroke="#FAC45E"
                strokeWidth={0.3125}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M6.0415 4.16667H6.95817C7.02721 4.16667 7.08317 4.1107 7.08317 4.04167V3.125"
                stroke="#FAC45E"
                strokeWidth={0.3125}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M3.10047 5.83337C3.42195 6.56917 4.15615 7.08337 5.01045 7.08337C6.09073 7.08337 6.97897 6.26115 7.0835 5.20837"
                stroke="#FAC45E"
                strokeWidth={0.3125}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M3.96875 5.83333H3.05208C2.98305 5.83333 2.92708 5.8893 2.92708 5.95833V6.875"
                stroke="#FAC45E"
                strokeWidth={0.3125}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_3394">
                <Rect
                    width={5}
                    height={5}
                    fill="white"
                    transform="translate(2.5 2.5)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default RefreshSVGComponent;
