import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FilterSVGComponent = (props) => (
    <Svg
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5.3999 2.59998H18.5999C19.6999 2.59998 20.5999 3.49998 20.5999 4.59998V6.79998C20.5999 7.59998 20.0999 8.59998 19.5999 9.09998L15.2999 12.9C14.6999 13.4 14.2999 14.4 14.2999 15.2V19.5C14.2999 20.1 13.8999 20.9 13.3999 21.2L11.9999 22.1C10.6999 22.9 8.8999 22 8.8999 20.4V15.1C8.8999 14.4 8.4999 13.5 8.0999 13L4.2999 8.99998C3.7999 8.49998 3.3999 7.59998 3.3999 6.99998V4.69998C3.3999 3.49998 4.2999 2.59998 5.3999 2.59998Z"
            stroke="#6B7386"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M10.93 2.59998L6 10.5"
            stroke="#6B7386"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default FilterSVGComponent;
