import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const Country = (props) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1_2205)">
            <Path
                d="M8.67948 16.4588C12.674 16.4588 15.9122 13.2206 15.9122 9.22611C15.9122 5.2316 12.674 1.99341 8.67948 1.99341C4.68497 1.99341 1.44678 5.2316 1.44678 9.22611C1.44678 13.2206 4.68497 16.4588 8.67948 16.4588Z"
                stroke="black"
                strokeWidth={1.08491}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M1.80811 9.58765L5.78609 11.0342L5.06282 13.5656L5.78609 15.7354"
                stroke="black"
                strokeWidth={1.08491}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M12.2958 15.3738L11.9342 13.5656L10.126 12.8424V10.3109L12.2958 9.58765L15.5505 9.94928"
                stroke="black"
                strokeWidth={1.08491}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13.7422 4.5249L13.3806 5.60981L10.8491 5.97144V8.14125L12.6573 7.41798H14.1038L15.5504 8.14125"
                stroke="black"
                strokeWidth={1.08491}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M1.80811 8.14132L3.61628 6.69478L5.42446 6.33315L6.871 4.16334L6.14773 2.7168"
                stroke="black"
                strokeWidth={1.08491}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_2205">
                <Rect
                    width={17.3585}
                    height={17.3585}
                    fill="white"
                    transform="translate(0 0.546875)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Country;
