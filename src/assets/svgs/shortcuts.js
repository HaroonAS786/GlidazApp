import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const Shortcuts = (props) => (
    <Svg
        width={15}
        height={15}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1_2234)">
            <Path
                d="M11.25 4.43556C11.25 4.43556 10.5621 4.84196 10.1795 4.95715C9.97423 4.72107 9.70136 4.55375 9.39785 4.4778C9.09434 4.40186 8.77483 4.42096 8.48253 4.53253C8.19023 4.64409 7.93924 4.84274 7.76352 5.1016C7.58779 5.36045 7.49581 5.66704 7.5 5.97988V6.32078C6.9009 6.33632 6.30725 6.20345 5.77193 5.934C5.23662 5.66456 4.77624 5.26691 4.43182 4.77647C4.43182 4.77647 3.06818 7.84465 6.13636 9.20828C5.43427 9.68486 4.59789 9.92383 3.75 9.8901C6.81818 11.5946 10.5682 9.8901 10.5682 5.96965C10.5679 5.87469 10.5587 5.77996 10.5409 5.68669C10.8888 5.34357 11.25 4.43556 11.25 4.43556Z"
                stroke="black"
                strokeWidth={0.511364}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_2234">
                <Rect
                    width={8.18182}
                    height={8.18182}
                    fill="white"
                    transform="translate(3.40918 3.40918)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Shortcuts;
