import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const CountryFlightSVGComponent = (props) => (
    <Svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={32} height={32} rx={8} fill="#FF7A00" />
        <Rect
            x={8.38086}
            y={24.381}
            width={21.3333}
            height={6.09524}
            rx={3.04762}
            transform="rotate(-90 8.38086 24.381)"
            fill="white"
        />
        <Rect
            x={16.7617}
            y={29.7143}
            width={21.3333}
            height={6.09524}
            rx={3.04762}
            transform="rotate(-90 16.7617 29.7143)"
            fill="white"
        />
    </Svg>
);
export default CountryFlightSVGComponent;
