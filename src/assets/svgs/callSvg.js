import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Call = (props) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11.5026 9.36771L8.99357 9.85388C7.29881 9.00325 6.25195 8.02614 5.6427 6.50302L6.11179 3.98676L5.22507 1.62903L2.93983 1.62903C2.25287 1.62903 1.71192 2.19671 1.81451 2.87596C2.07064 4.5717 2.82586 7.64629 5.03345 9.85388C7.35177 12.1722 10.6908 13.1782 12.5284 13.5781C13.2381 13.7325 13.8676 13.1789 13.8676 12.4526L13.8676 10.2689L11.5026 9.36771Z"
            stroke="black"
            strokeWidth={0.913873}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Call;
