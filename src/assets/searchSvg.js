import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Search = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M17.5498 17.5L21.5498 21.5"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M3.5498 11.5C3.5498 15.9183 7.13153 19.5 11.5498 19.5C13.7628 19.5 15.7659 18.6015 17.2142 17.1493C18.6575 15.7022 19.5498 13.7053 19.5498 11.5C19.5498 7.08172 15.9681 3.5 11.5498 3.5C7.13153 3.5 3.5498 7.08172 3.5498 11.5Z"
            stroke="black"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Search;
