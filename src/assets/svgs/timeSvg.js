import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TimeSVGComponent = (props) => (
    <Svg
        width={10}
        height={10}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM6.775 6.9L4.735 5.645C4.585 5.555 4.495 5.395 4.495 5.22V2.875C4.5 2.67 4.67 2.5 4.875 2.5C5.08 2.5 5.25 2.67 5.25 2.875V5.1L7.17 6.255C7.35 6.365 7.41 6.6 7.3 6.78C7.19 6.955 6.955 7.01 6.775 6.9Z"
            fill="#0284C7"
        />
    </Svg>
);
export default TimeSVGComponent;
