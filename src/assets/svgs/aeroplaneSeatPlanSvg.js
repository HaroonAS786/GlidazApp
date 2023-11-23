import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const AeroplaneSeatPanSVGComponent = (props) => (
    <Svg
        width={351}
        height={503}
        viewBox="0 0 351 503"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#filter0_d_1_4030)">
            <G filter="url(#filter1_b_1_4030)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M78.9377 160.202L78.9377 486.094L276.193 486.094L276.193 160.332C276.193 160.288 276.193 160.245 276.193 160.202C276.193 160.165 276.193 160.128 276.193 160.091L276.193 152.8L275.994 152.8C272.213 81.786 215.256 12 177.565 12C139.875 12 82.918 81.786 79.1363 152.8L78.9377 152.8L78.9377 160.202Z"
                    fill="white"
                />
            </G>
            <Path
                d="M248.305 221.499L336.73 277.515V411.952L248.305 355.937V221.499Z"
                fill="url(#paint0_linear_1_4030)"
            />
            <Path
                d="M103.425 221.499L15 277.515V411.952L103.425 355.937V221.499Z"
                fill="url(#paint1_linear_1_4030)"
            />
        </G>
        <Path
            d="M81.022 136.981L276.917 136.981"
            stroke="#DDDDDD"
            strokeWidth={0.680191}
        />
        <Path
            d="M78.9595 270.098L80.7028 270.098L80.7028 268.197L81.264 268.197L81.264 270.098L83.0597 270.098L83.0597 267.973L83.6208 267.973L83.6208 270.779L78.3983 270.779L78.3983 267.973L78.9595 267.973L78.9595 270.098ZM81.0171 264.47L83.6208 262.869L83.6208 263.64L81.5857 264.889L83.6208 266.079L83.6208 266.834L81.0171 265.241L78.4058 266.842L78.4058 266.079L80.4484 264.822L78.4058 263.625L78.4058 262.861L81.0171 264.47ZM78.4058 260.934L83.6208 260.934L83.6208 261.615L78.4058 261.615L78.4058 260.934ZM78.4058 256.224L78.9595 256.224L78.9595 257.646L83.6208 257.646L83.6208 258.327L78.9595 258.327L78.9595 259.756L78.4058 259.756L78.4058 256.224Z"
            fill="#AAAAAA"
        />
        <Path
            d="M279.66 258.256L277.916 258.256L277.916 260.156L277.355 260.156L277.355 258.256L275.559 258.256L275.559 260.381L274.998 260.381L274.998 257.575L280.221 257.575L280.221 260.381L279.66 260.381L279.66 258.256ZM277.602 263.884L274.998 265.485L274.998 264.714L277.033 263.465L274.998 262.275L274.998 261.519L277.602 263.113L280.213 261.512L280.213 262.275L278.171 263.532L280.213 264.729L280.213 265.492L277.602 263.884ZM280.213 267.419L274.998 267.419L274.998 266.738L280.213 266.738L280.213 267.419ZM280.213 272.13L279.66 272.13L279.66 270.708L274.998 270.708L274.998 270.027L279.66 270.027L279.66 268.598L280.213 268.598L280.213 272.13Z"
            fill="#AAAAAA"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_1_4030"
                x1={292.518}
                y1={221.499}
                x2={292.518}
                y2={379.984}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.654604} stopColor="white" />
                <Stop offset={1} stopColor="white" stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id="paint1_linear_1_4030"
                x1={59.2124}
                y1={221.499}
                x2={59.2124}
                y2={379.984}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.654604} stopColor="white" />
                <Stop offset={1} stopColor="white" stopOpacity={0} />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default AeroplaneSeatPanSVGComponent;



;
