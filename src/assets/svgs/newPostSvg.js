import * as React from "react";
import Svg, { Path } from "react-native-svg";

const NewEvent = (props) => (
    <Svg
        width={20}
        height={21}
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10.7009 17.8971H3.0579C2.78847 17.8971 2.57005 17.6787 2.57005 17.4092V3.74943C2.57005 3.48 2.78847 3.26158 3.0579 3.26158H16.7177C16.9871 3.26158 17.2056 3.48 17.2056 3.74943V11.3924"
            stroke="black"
            strokeWidth={1.21963}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M13.1401 16.271H15.5794M18.0186 16.271H15.5794M15.5794 16.271V13.8318M15.5794 16.271V18.7103"
            stroke="black"
            strokeWidth={1.21963}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8.17862 7.74411C7.85339 7.55826 7.44873 7.7931 7.44873 8.16768V12.991C7.44873 13.3656 7.85339 13.6005 8.17862 13.4146L12.3991 11.0029C12.7268 10.8157 12.7268 10.3431 12.3991 10.1558L8.17862 7.74411Z"
            stroke="black"
            strokeWidth={1.21963}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default NewEvent;
