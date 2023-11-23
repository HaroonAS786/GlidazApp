import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const KM = (props) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1_1466)">
            <Path
                d="M5.87998 0.985352C8.39908 0.985352 10.4436 3.18451 10.4436 5.8942C10.4436 8.60879 8.39908 10.803 5.87998 10.803C3.35632 10.803 1.31641 8.60879 1.31641 5.8942C1.31641 3.18451 3.35632 0.985352 5.87998 0.985352ZM7.63696 4.27919C7.68716 4.10738 7.54112 3.94539 7.3814 3.99938L5.04485 4.7848C4.94901 4.81916 4.87143 4.8977 4.84405 5.00079L4.11388 7.51903C4.06368 7.68593 4.21428 7.84792 4.36944 7.79392L6.69686 7.00851C6.7927 6.97905 6.87028 6.8956 6.89766 6.79252L7.63696 4.27919Z"
                fill="#1D4ED8"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_1466">
                <Rect
                    x={0.405273}
                    y={0.00244141}
                    width={10.9526}
                    height={11.7812}
                    fill="white"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default KM;
