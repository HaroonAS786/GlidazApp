import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const UpcomingFlightCardSVGComponent = (props) => (
    <Svg
        width={props.width ? props.width : 375}
        height={props.height ? props.height : 321}
        viewBox="0 0 375 321"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#filter0_d_0_1)">
            <Path
                d="M30 74.2275C30 60.847 40.3837 50 53.1927 50H322.807C335.616 50 346 60.847 346 74.2275V184.261C339.596 184.261 334.404 189.684 334.404 196.374C334.404 203.065 339.596 208.488 346 208.488V238.773C346 252.153 335.616 263 322.807 263H53.1927C40.3837 263 30 252.153 30 238.773V208.488C36.4045 208.488 41.5963 203.065 41.5963 196.374C41.5963 189.684 36.4045 184.261 30 184.261V74.2275Z"
                fill="white"
            />
        </G>
        <Path
            opacity={0.1}
            d="M42 195L334 195"
            stroke="black"
            strokeDasharray="5 5"
        />
        <Defs></Defs>
    </Svg>
);
export default UpcomingFlightCardSVGComponent;
