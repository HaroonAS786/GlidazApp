import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const LoinAirSVGComponent = (props) => (
    <Svg
        width={51}
        height={9}
        viewBox="0 0 51 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Rect width={50.625} height={9} fill="url(#pattern0)" />
        <Defs>
            <Pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use
                    xlinkHref="#image0_1_3923"
                    transform="matrix(0.000244141 0 0 0.00137329 0 -0.737335)"
                />
            </Pattern>
            <Image
                id="image0_1_3923"
                width={4096}
                height={1802}
            />
        </Defs>
    </Svg>
);
export default LoinAirSVGComponent;