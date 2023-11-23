import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";


const Date = (props) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1_2206)">
            <Path
                d="M8.6792 4.43335L8.6792 8.77297L13.0188 8.77297"
                stroke={props.stroke ? props.stroke : "black"}
                strokeWidth={1.08491}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M8.67948 16.0057C12.674 16.0057 15.9122 12.7675 15.9122 8.77299C15.9122 4.77848 12.674 1.54028 8.67948 1.54028C4.68497 1.54028 1.44678 4.77848 1.44678 8.77299C1.44678 12.7675 4.68497 16.0057 8.67948 16.0057Z"
                stroke={props.stroke ? props.stroke : "black"}
                strokeWidth={1.08491}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_2206">
                <Rect
                    width={17.3585}
                    height={17.3585}
                    fill="white"
                    transform="translate(0 0.09375)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Date;
