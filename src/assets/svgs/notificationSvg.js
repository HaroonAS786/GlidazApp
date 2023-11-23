import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Notification = (props) => (
    <Svg
        width={21}
        height={19}
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M16.5498 7.9C16.5498 6.20261 15.9177 4.57475 14.7924 3.37452C13.6672 2.17428 12.1411 1.5 10.5498 1.5C8.95851 1.5 7.43238 2.17428 6.30716 3.37452C5.18195 4.57475 4.5498 6.20261 4.5498 7.9C4.5498 15.3667 1.5498 17.5 1.5498 17.5H19.5498C19.5498 17.5 16.5498 15.3667 16.5498 7.9Z"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Notification;
