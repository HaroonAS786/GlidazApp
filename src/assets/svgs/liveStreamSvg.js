import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LiveStream = (props) => (
    <Svg
        width={17}
        height={10}
        viewBox="0 0 17 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11.3273 5.13964V8.71721C11.3273 8.98664 11.1089 9.20506 10.8395 9.20506H2.05816C1.78873 9.20506 1.57031 8.98664 1.57031 8.71721V1.56207C1.57031 1.29264 1.78873 1.07422 2.05816 1.07422H10.8395C11.1089 1.07422 11.3273 1.29264 11.3273 1.56207V5.13964ZM11.3273 5.13964L15.4057 1.74102C15.7234 1.47623 16.2058 1.70218 16.2058 2.1158V8.16348C16.2058 8.5771 15.7234 8.80305 15.4057 8.53826L11.3273 5.13964Z"
            stroke={props.stroke ? props.stroke : "black"}
            strokeWidth={1.21963}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default LiveStream;
