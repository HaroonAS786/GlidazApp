import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LiveForcast = (props) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M1.44678 15.1132L1.45401 15.1052"
            stroke="black"
            strokeWidth={1.08491}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M10.8492 15.106H14.4656C15.2645 15.106 15.9121 14.4583 15.9121 13.6594V4.98017C15.9121 4.18127 15.2645 3.53363 14.4656 3.53363H2.89324C2.09434 3.53363 1.4467 4.18127 1.4467 4.98017V5.70344"
            stroke="black"
            strokeWidth={1.08491}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M1.44678 12.2129C2.89332 12.5745 3.97822 13.6594 4.33986 15.106"
            stroke="black"
            strokeWidth={1.08491}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M1.44678 9.31982C4.33986 9.68146 6.87131 12.2129 7.23294 15.106"
            stroke="black"
            strokeWidth={1.08491}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default LiveForcast;
