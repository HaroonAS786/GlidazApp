import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ReadOnly = (props) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M3 9.78571C5.57143 4.07143 13.2857 4.07143 15.8571 9.78571"
            stroke="white"
            strokeWidth={1.07143}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M9.42843 12.6426C8.24496 12.6426 7.28557 11.6833 7.28557 10.4998C7.28557 9.31632 8.24496 8.35693 9.42843 8.35693C10.6119 8.35693 11.5713 9.31632 11.5713 10.4998C11.5713 11.6833 10.6119 12.6426 9.42843 12.6426Z"
            stroke="white"
            strokeWidth={1.07143}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default ReadOnly;
