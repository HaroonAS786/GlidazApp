import * as React from "react";
import Svg, { Circle } from "react-native-svg";


const CircleSVGComponent = (props) => (
    <Svg
        width={5}
        height={5}
        viewBox="0 0 5 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={2.5} cy={2.5} r={1.5} fill="#D9D9D9" />
        <Circle cx={2.5} cy={2.5} r={2.25} stroke="white" strokeWidth={0.5} />
    </Svg>
);
export default CircleSVGComponent;
