import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IndicatorMapLogoSVGComponent = (props) => (
    <Svg
        width={11}
        height={14}
        viewBox="0 0 11 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 5.25C0 2.35525 2.31366 0 5.15789 0C8.00212 0 10.3158 2.35525 10.3158 5.25C10.3158 9.12313 5.55693 13.7266 5.35435 13.9208C5.29893 13.9735 5.22841 14 5.15789 14C5.08738 14 5.01686 13.9735 4.96146 13.9208C4.75886 13.7266 0 9.12313 0 5.25ZM2.29246 5.25005C2.29246 6.85821 3.57801 8.16672 5.15796 8.16672C6.73792 8.16672 8.02347 6.85819 8.02347 5.25005C8.02347 3.64191 6.73789 2.33337 5.15796 2.33337C3.57803 2.33337 2.29246 3.64188 2.29246 5.25005Z"
            fill="#3347D2"
        />
    </Svg>
);
export default IndicatorMapLogoSVGComponent;
