import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CalenderSVGComponent = (props) => (
    <Svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M9.5 2H9V1.5C9 1.225 8.775 1 8.5 1C8.225 1 8 1.225 8 1.5V2H4V1.5C4 1.225 3.775 1 3.5 1C3.225 1 3 1.225 3 1.5V2H2.5C1.945 2 1.505 2.45 1.505 3L1.5 10C1.5 10.55 1.945 11 2.5 11H9.5C10.05 11 10.5 10.55 10.5 10V3C10.5 2.45 10.05 2 9.5 2ZM9 10H3C2.725 10 2.5 9.775 2.5 9.5V4.5H9.5V9.5C9.5 9.775 9.275 10 9 10ZM4 5.5H5.5C5.775 5.5 6 5.725 6 6V7.5C6 7.775 5.775 8 5.5 8H4C3.725 8 3.5 7.775 3.5 7.5V6C3.5 5.725 3.725 5.5 4 5.5Z"
            fill="#0284C7"
        />
    </Svg>
);
export default CalenderSVGComponent;
