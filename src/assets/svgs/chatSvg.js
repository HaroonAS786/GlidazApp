import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Chat = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M8.5498 10.5L12.5498 10.5L16.5498 10.5"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8.5498 14.5L10.5498 14.5L12.5498 14.5"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12.5498 22.5C18.0727 22.5 22.5498 18.0228 22.5498 12.5C22.5498 6.97715 18.0727 2.5 12.5498 2.5C7.02696 2.5 2.5498 6.97715 2.5498 12.5C2.5498 14.3214 3.03678 16.0291 3.88763 17.5L3.0498 22L7.5498 21.1622C9.02067 22.013 10.7284 22.5 12.5498 22.5Z"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Chat;
