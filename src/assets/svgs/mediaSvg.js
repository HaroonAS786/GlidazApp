import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const Media = (props) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1_2140)">
            <Path
                d="M8.76829 2.38153V9.20902C8.76829 9.27369 8.7426 9.33571 8.69687 9.38144C8.65114 9.42717 8.58912 9.45286 8.52445 9.45286H1.69696C1.63229 9.45286 1.57027 9.42717 1.52454 9.38144C1.47882 9.33571 1.45312 9.27369 1.45312 9.20902V2.38153C1.45312 2.31686 1.47882 2.25484 1.52454 2.20911C1.57027 2.16339 1.63229 2.1377 1.69696 2.1377H8.52445C8.58912 2.1377 8.65114 2.16339 8.69687 2.20911C8.7426 2.25484 8.76829 2.31686 8.76829 2.38153Z"
                stroke="#6B7280"
                strokeWidth={0.609597}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M1.45312 7.42091L4.29791 6.20172L8.76829 8.23371M6.7363 4.98253C6.52073 4.98253 6.31399 4.89689 6.16156 4.74446C6.00914 4.59203 5.9235 4.3853 5.9235 4.16973C5.9235 3.95416 6.00914 3.74742 6.16156 3.595C6.31399 3.44257 6.52073 3.35693 6.7363 3.35693C6.95186 3.35693 7.1586 3.44257 7.31103 3.595C7.46346 3.74742 7.54909 3.95416 7.54909 4.16973C7.54909 4.3853 7.46346 4.59203 7.31103 4.74446C7.1586 4.89689 6.95186 4.98253 6.7363 4.98253Z"
                stroke="#6B7280"
                strokeWidth={0.609597}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_2140">
                <Rect
                    width={9.75355}
                    height={9.75355}
                    fill="white"
                    transform="translate(0.233887 0.918457)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Media;
