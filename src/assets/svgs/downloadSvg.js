import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DownLoadSVGComponent = (props) => (
    <Svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M6 11.8333L10 11.8333"
            stroke="#6B6B6B"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8.00008 4.50008V9.16675M8.00008 9.16675L10.3334 6.83341M8.00008 9.16675L5.66675 6.83341"
            stroke="#6B6B6B"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M7.99992 15.1666C11.6818 15.1666 14.6666 12.1818 14.6666 8.49992C14.6666 4.81802 11.6818 1.83325 7.99992 1.83325C4.31802 1.83325 1.33325 4.81802 1.33325 8.49992C1.33325 12.1818 4.31802 15.1666 7.99992 15.1666Z"
            stroke="#6B6B6B"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default DownLoadSVGComponent;
