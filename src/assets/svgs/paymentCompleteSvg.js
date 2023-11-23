import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const PaymentCompleteSVGComponent = (props) => (
    <Svg
        width={97}
        height={96}
        viewBox="0 0 97 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect x={0.5} width={96} height={96} rx={48} fill="#0EA5E9" />
        <Rect
            opacity={0.32}
            x={10}
            y={9.5}
            width={77}
            height={77}
            rx={38.5}
            stroke="url(#paint0_linear_1_4826)"
            strokeWidth={3}
        />
        <Path
            d="M36.3179 64.6918L22.3394 50.7133C20.8208 49.1948 20.8208 46.7417 22.3394 45.2231C23.8579 43.7046 26.311 43.7046 27.8296 45.2231L39.0825 56.4371L65.8714 29.6482C67.3899 28.1296 69.843 28.1296 71.3615 29.6482C72.8801 31.1668 72.8801 33.6198 71.3615 35.1384L41.8081 64.6918C40.3285 66.2104 37.8365 66.2104 36.3179 64.6918Z"
            fill="white"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_1_4826"
                x1={48.5}
                y1={8}
                x2={48.5}
                y2={88}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="white" />
                <Stop offset={1} stopColor="white" stopOpacity={0} />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default PaymentCompleteSVGComponent;
