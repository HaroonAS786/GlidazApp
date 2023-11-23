import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CustomerServiceSVGComponent = (props) => (
    <Svg
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12.5 12C14.7091 12 16.5 10.2091 16.5 8C16.5 5.79086 14.7091 4 12.5 4C10.2909 4 8.5 5.79086 8.5 8C8.5 10.2091 10.2909 12 12.5 12Z"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M5.5 20V19C5.5 15.134 8.63401 12 12.5 12C13.5736 12 14.5907 12.2417 15.5 12.6736"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M21.5 22L22.5 16L19 17.8L17.5 16L16 17.8L12.5 16L13.5 22H21.5Z"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default CustomerServiceSVGComponent;
