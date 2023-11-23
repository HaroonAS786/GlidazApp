import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const UpComingFlightDividerSVGComponent = (props) => (
    <Svg
        width={props.width}
        height={6}
        viewBox="0 0 151 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M3 3H148" stroke="#0067FF" strokeWidth={1.5} />
        <Circle cx={3} cy={3} r={2.5} fill="white" stroke="#0067FF" />
        <Circle cx={148} cy={3} r={2.5} fill="white" stroke="#0067FF" />
    </Svg>
);
export default UpComingFlightDividerSVGComponent;
