import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const Location = (props) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1_2141)">
            <Path
                d="M8.99211 4.98238C8.99211 6.77785 5.74093 9.85916 5.74093 9.85916C5.74093 9.85916 2.48975 6.77785 2.48975 4.98238C2.48975 4.12012 2.83228 3.29317 3.442 2.68345C4.05171 2.07374 4.87866 1.7312 5.74093 1.7312C6.6032 1.7312 7.43015 2.07374 8.03986 2.68345C8.64958 3.29317 8.99211 4.12012 8.99211 4.98238Z"
                stroke="#6B7280"
                strokeWidth={0.609597}
            />
            <Path
                d="M5.74087 5.38872C5.84865 5.38872 5.95202 5.34591 6.02824 5.26969C6.10445 5.19348 6.14727 5.09011 6.14727 4.98233C6.14727 4.87454 6.10445 4.77117 6.02824 4.69496C5.95202 4.61874 5.84865 4.57593 5.74087 4.57593C5.63309 4.57593 5.52972 4.61874 5.4535 4.69496C5.37729 4.77117 5.33447 4.87454 5.33447 4.98233C5.33447 5.09011 5.37729 5.19348 5.4535 5.26969C5.52972 5.34591 5.63309 5.38872 5.74087 5.38872Z"
                fill="#6B7280"
                stroke="#6B7280"
                strokeWidth={0.609597}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_2141">
                <Rect
                    width={9.75355}
                    height={9.75355}
                    fill="white"
                    transform="translate(0.864258 0.918457)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export default Location;
