import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PremiumSVGComponent = (props) => (
    <Svg
        width={6}
        height={8}
        viewBox="0 0 6 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M2.44393 7.75C2.2981 7.75 2.1856 7.62083 2.20643 7.475L2.58143 4.83333H1.1231C0.756429 4.83333 0.985596 4.52083 0.993929 4.50833C1.51893 3.57917 2.30643 2.20417 3.3481 0.370833C3.38976 0.295833 3.4731 0.25 3.55643 0.25C3.70226 0.25 3.81476 0.379167 3.79393 0.525L3.41893 3.16667H4.88143C5.0481 3.16667 5.13976 3.24583 5.0481 3.44167C3.67726 5.83333 2.88143 7.22917 2.65226 7.62917C2.6106 7.70417 2.53143 7.75 2.44393 7.75Z"
            fill="#0284C7"
        />
    </Svg>
);

export default PremiumSVGComponent;
