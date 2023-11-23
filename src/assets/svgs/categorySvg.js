import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Category = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M2.57031 4.98132H17.2058"
            stroke="black"
            strokeWidth={1.21963}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M5.82227 9.85974L13.9531 9.85974"
            stroke="black"
            strokeWidth={1.21963}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M9.07471 14.7383L10.7009 14.7383"
            stroke="black"
            strokeWidth={1.21963}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Category;
