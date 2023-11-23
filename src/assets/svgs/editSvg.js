import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const EditSVGComponent = (props) => (
    <Svg
        width={15}
        height={15}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={15} height={15} rx={7.5} fill="#818181" fillOpacity={0.6} />
        <Path
            d="M8.58295 4.59034L9.26128 3.91201C9.61926 3.55403 10.1997 3.55403 10.5576 3.91201L11.2058 4.56019C11.5638 4.91817 11.5638 5.49857 11.2058 5.85656L10.5275 6.53488M8.58295 4.59034L4.17577 8.99752C4.02357 9.14972 3.92978 9.35063 3.91084 9.56504L3.79989 10.8211C3.77478 11.1052 4.0126 11.3431 4.29677 11.3179L5.5528 11.207C5.76721 11.1881 5.96811 11.0943 6.12032 10.9421L10.5275 6.53488M8.58295 4.59034L10.5275 6.53488"
            stroke="black"
            strokeWidth={0.6875}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default EditSVGComponent;
