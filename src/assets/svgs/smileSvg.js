import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SmileSVGComponent = (props) => (

    <Svg
        width={15}
        height={16}
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5.51597 6.73816V9.45892M9.59712 6.73816V9.45892M7.55654 14.9004C11.3132 14.9004 14.3584 11.8552 14.3584 8.09854C14.3584 4.34184 11.3132 1.29663 7.55654 1.29663C3.79985 1.29663 0.754639 4.34184 0.754639 8.09854C0.754639 11.8552 3.79985 14.9004 7.55654 14.9004Z"
            stroke="#AAAAAA"
            strokeWidth={1.02029}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default SmileSVGComponent;
