import * as React from "react";
import Svg, { Line } from "react-native-svg";
const LineSVGComponent = (props) => (
    <Svg
        width={1}
        height={62}
        viewBox="0 0 1 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Line
            x1={0.5}
            y1={2.18556e-8}
            x2={0.499997}
            y2={62}
            stroke="#A5A5A5"
            strokeDasharray="2 2"
        />
    </Svg>
);
export default LineSVGComponent;
