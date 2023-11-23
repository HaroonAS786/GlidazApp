import * as React from "react";
import Svg, { Path } from "react-native-svg";

const JoinEvent = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5.74583 3.94576C5.42063 3.75304 5.00928 3.98744 5.00928 4.36545V15.6625C5.00928 16.0405 5.42063 16.2749 5.74584 16.0821L15.2777 10.4336C15.5965 10.2447 15.5965 9.78321 15.2777 9.59426L5.74583 3.94576Z"
            stroke={props.stroke ? props.stroke : 'white'}
            strokeWidth={1.21963}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default JoinEvent;
