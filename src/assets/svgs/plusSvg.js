import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Plus = (props) => (
    <Svg
        width={15}
        height={15}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M1.5498 7.5H7.5498M13.5498 7.5H7.5498M7.5498 7.5V1.5M7.5498 7.5V13.5"
            stroke={props.stroke ? props.stroke : "black"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Plus;
