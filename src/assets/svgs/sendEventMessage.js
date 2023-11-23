import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SendEventMessage = (props) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5.04565 6.22723L8.0002 8.29541L10.9547 6.22723"
            stroke="black"
            strokeWidth={0.886364}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M2.09106 10.9546V5.04547C2.09106 4.39277 2.62018 3.86365 3.27288 3.86365H12.7274C13.3801 3.86365 13.9092 4.39277 13.9092 5.04547V10.9546C13.9092 11.6073 13.3801 12.1364 12.7274 12.1364H3.27288C2.62018 12.1364 2.09106 11.6073 2.09106 10.9546Z"
            stroke="black"
            strokeWidth={0.886364}
        />
    </Svg>
);
export default SendEventMessage;
