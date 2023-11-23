import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HourSVGComponent = (props) => (
    <Svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M8.12 3.88C7.535 3.295 6.77 3 6 3V6L3.88 8.12C5.05 9.29 6.95 9.29 8.125 8.12C9.295 6.95 9.295 5.05 8.12 3.88ZM6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2C8.21 2 10 3.79 10 6C10 8.21 8.21 10 6 10Z"
            fill="#0284C7"
        />
    </Svg>
);
export default HourSVGComponent;
