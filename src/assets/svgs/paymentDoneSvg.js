import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PaymentProceedSVGComponent = (props) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M9.00002 0.666626C4.40002 0.666626 0.666687 4.39996 0.666687 8.99996C0.666687 13.6 4.40002 17.3333 9.00002 17.3333C13.6 17.3333 17.3334 13.6 17.3334 8.99996C17.3334 4.39996 13.6 0.666626 9.00002 0.666626ZM6.74169 12.575L3.75002 9.58329C3.42502 9.25829 3.42502 8.73329 3.75002 8.40829C4.07502 8.08329 4.60002 8.08329 4.92502 8.40829L7.33335 10.8083L13.0667 5.07496C13.3917 4.74996 13.9167 4.74996 14.2417 5.07496C14.5667 5.39996 14.5667 5.92496 14.2417 6.24996L7.91669 12.575C7.60002 12.9 7.06669 12.9 6.74169 12.575Z"
            fill="white"
        />
    </Svg>
);
export default PaymentProceedSVGComponent;
