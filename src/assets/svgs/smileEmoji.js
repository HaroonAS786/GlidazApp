import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const SmileEmoji = (props) => (
    <Svg
        width={20}
        height={18}
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1_2142)">
            <Path
                d="M5.3716 9.85916C3.12706 9.85916 1.30762 8.03972 1.30762 5.79518C1.30762 3.55064 3.12706 1.7312 5.3716 1.7312C7.61613 1.7312 9.43558 3.55064 9.43558 5.79518C9.43558 8.03972 7.61613 9.85916 5.3716 9.85916Z"
                stroke="#6B7280"
                strokeWidth={0.609597}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M7.20006 6.81128C7.20006 6.81128 6.59046 7.62408 5.37127 7.62408C4.15208 7.62408 3.54248 6.81128 3.54248 6.81128"
                stroke="#6B7280"
                strokeWidth={0.609597}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M6.79359 4.57608C6.7397 4.57608 6.68801 4.55467 6.64991 4.51656C6.6118 4.47845 6.59039 4.42677 6.59039 4.37288C6.59039 4.31898 6.6118 4.2673 6.64991 4.22919C6.68801 4.19109 6.7397 4.16968 6.79359 4.16968C6.84748 4.16968 6.89917 4.19109 6.93727 4.22919C6.97538 4.2673 6.99679 4.31898 6.99679 4.37288C6.99679 4.42677 6.97538 4.47845 6.93727 4.51656C6.89917 4.55467 6.84748 4.57608 6.79359 4.57608ZM3.9488 4.57608C3.89491 4.57608 3.84323 4.55467 3.80512 4.51656C3.76701 4.47845 3.74561 4.42677 3.74561 4.37288C3.74561 4.31898 3.76701 4.2673 3.80512 4.22919C3.84323 4.19109 3.89491 4.16968 3.9488 4.16968C4.0027 4.16968 4.05438 4.19109 4.09249 4.22919C4.1306 4.2673 4.152 4.31898 4.152 4.37288C4.152 4.42677 4.1306 4.47845 4.09249 4.51656C4.05438 4.55467 4.0027 4.57608 3.9488 4.57608Z"
                fill="#6B7280"
                stroke="#6B7280"
                strokeWidth={0.609597}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_2142">
                <Rect
                    width={9.75355}
                    height={9.75355}
                    fill="white"
                    transform="translate(0.494629 0.918457)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default SmileEmoji;