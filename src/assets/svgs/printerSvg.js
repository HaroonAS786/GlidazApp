import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const PrinterSVGComponent = (props) => (
    <Svg
        width={43}
        height={44}
        viewBox="0 0 43 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11.2178 27.6089H31.4099M14.5831 19.7564V12.577C14.5831 12.2053 14.8845 11.9039 15.2562 11.9039H27.3715C27.7432 11.9039 28.0445 12.2053 28.0445 12.577V19.7564M31.4099 31.423V24.2436C31.4099 21.7654 29.4009 19.7564 26.9228 19.7564H15.7049C13.2267 19.7564 11.2178 21.7654 11.2178 24.2436V31.423C11.2178 31.7947 11.5191 32.096 11.8908 32.096H30.7368C31.1085 32.096 31.4099 31.7947 31.4099 31.423Z"
            stroke="black"
            strokeWidth={1.68268}
        />
        <Path
            d="M30.1951 23.7939L30.2128 23.7741"
            stroke="black"
            strokeWidth={1.68268}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Rect
            x={0.560892}
            y={1.24705}
            width={41.506}
            height={41.506}
            rx={20.753}
            stroke="lightgrey"
            strokeWidth={1.12178}
        />
    </Svg>
);
export default PrinterSVGComponent;
