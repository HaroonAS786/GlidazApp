import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const SendComment = (props) => (
    <Svg
        width={32}
        height={31}
        viewBox="0 0 32 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1_1858)">
            <Path
                d="M22.5096 11.2381L12.1309 24.9282L11.3685 17.6703L5.46419 13.3812L22.5096 11.2381Z"
                stroke="#E0E3EF"
                strokeWidth={1.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M10.9233 17.9287L24.2535 10.2325"
                stroke="#E0E3EF"
                strokeWidth={1.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_1858">
                <Rect
                    y={11.917}
                    width={23.8333}
                    height={21.3333}
                    rx={10.6667}
                    transform="rotate(-30 0 11.917)"
                    fill="white"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default SendComment;
