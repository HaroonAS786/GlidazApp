import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SupportSVGComponent = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M18.1181 14.702L13.9998 15.5C11.2181 14.1038 9.49985 12.5 8.49985 10L9.2698 5.8699L7.81436 2L4.06344 2C2.9359 2 2.04799 2.93178 2.21639 4.04668C2.63679 6.83 3.87638 11.8765 7.49985 15.5C11.305 19.3052 16.7856 20.9564 19.8019 21.6127C20.9666 21.8662 21.9998 20.9575 21.9998 19.7655L21.9998 16.1812L18.1181 14.702Z"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default SupportSVGComponent;
