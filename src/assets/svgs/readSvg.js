import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ReadSVGComponent = (props) => (
    <Svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M2 9.16675C4.4 3.83342 11.6 3.83342 14 9.16675"
            stroke="#6B6B6B"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8 11.8333C6.89543 11.8333 6 10.9378 6 9.83325C6 8.72868 6.89543 7.83325 8 7.83325C9.10457 7.83325 10 8.72868 10 9.83325C10 10.9378 9.10457 11.8333 8 11.8333Z"
            stroke="#6B6B6B"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default ReadSVGComponent;
