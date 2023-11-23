import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CommentSVGComponent = (props) => (
    <Svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M7.02406 13.3474C10.5296 13.3474 13.3714 10.5057 13.3714 7.00014C13.3714 3.49462 10.5296 0.652832 7.02406 0.652832C3.51854 0.652832 0.676758 3.49462 0.676758 7.00014C0.676758 8.15626 0.985853 9.24019 1.52591 10.1738L0.994123 13.0301L3.85041 12.4983C4.78401 13.0383 5.86794 13.3474 7.02406 13.3474Z"
            stroke="black"
            strokeWidth={0.952096}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default CommentSVGComponent;
