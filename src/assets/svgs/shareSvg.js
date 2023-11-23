import * as React from "react";
import Svg, { Path } from "react-native-svg";


const ShareSVGComponent = (props) => (
    <Svg
        width={17}
        height={16}
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12.2396 14.3472C13.2913 14.3472 14.1438 13.4947 14.1438 12.443C14.1438 11.3914 13.2913 10.5388 12.2396 10.5388C11.188 10.5388 10.3354 11.3914 10.3354 12.443C10.3354 13.4947 11.188 14.3472 12.2396 14.3472Z"
            stroke={props.stroke ? props.stroke : "black"}
            strokeWidth={0.952096}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12.2396 5.46097C13.2913 5.46097 14.1438 4.60844 14.1438 3.55678C14.1438 2.50512 13.2913 1.65259 12.2396 1.65259C11.188 1.65259 10.3354 2.50512 10.3354 3.55678C10.3354 4.60844 11.188 5.46097 12.2396 5.46097Z"
            stroke={props.stroke ? props.stroke : "black"}
            strokeWidth={0.952096}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M4.62294 9.90409C5.6746 9.90409 6.52713 9.05155 6.52713 7.99989C6.52713 6.94824 5.6746 6.0957 4.62294 6.0957C3.57129 6.0957 2.71875 6.94824 2.71875 7.99989C2.71875 9.05155 3.57129 9.90409 4.62294 9.90409Z"
            stroke={props.stroke ? props.stroke : "black"}
            strokeWidth={0.952096}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M10.6526 4.50903L6.20947 7.04796"
            stroke={props.stroke ? props.stroke : "black"}
            strokeWidth={0.952096}
        />
        <Path
            d="M6.20947 8.95215L10.6526 11.4911"
            stroke={props.stroke ? props.stroke : "black"}
            strokeWidth={0.952096}
        />
    </Svg>
);
export default ShareSVGComponent;
