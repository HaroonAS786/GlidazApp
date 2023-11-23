import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SaveEvent = (props) => (
    <Svg
        width={20}
        height={21}
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M1.75684 9.81781V4.61407C1.75684 4.34464 1.97525 4.12622 2.24469 4.12622H7.26796C7.38441 4.12622 7.49703 4.16788 7.58545 4.24367L10.1572 6.44803C10.2456 6.52381 10.3582 6.56547 10.4747 6.56547H17.5307C17.8001 6.56547 18.0185 6.78389 18.0185 7.05332V9.81781M1.75684 9.81781V16.6477C1.75684 16.9171 1.97525 17.1356 2.24469 17.1356H17.5307C17.8001 17.1356 18.0185 16.9171 18.0185 16.6477V9.81781M1.75684 9.81781H18.0185"
            stroke="white"
            strokeWidth={1.21963}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default SaveEvent;
