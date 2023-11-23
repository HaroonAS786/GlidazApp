import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SelectedSeatSVGComponent = (props) => (
    <Svg
        width={19}
        height={18}
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M3.71164 4.01034C2.89541 3.42992 2.69589 2.30533 3.26725 1.48004C3.83861 0.663807 4.97226 0.464284 5.79756 1.03564C6.61378 1.61607 6.81331 2.74066 6.24195 3.56595C5.66152 4.38218 4.53694 4.5817 3.71164 4.01034ZM13.3703 17.0337C13.3703 16.5349 12.9622 16.1268 12.4634 16.1268H6.95841C5.61617 16.1268 4.47345 15.1473 4.27393 13.8232L2.6324 5.95116C2.59134 5.75082 2.48217 5.57088 2.32345 5.44192C2.16473 5.31297 1.96626 5.24294 1.76176 5.24376C1.19947 5.24376 0.782284 5.7607 0.891114 6.31392L2.47823 14.0953C2.64482 15.1664 3.18884 16.1426 4.01208 16.8478C4.83532 17.5529 5.88353 17.9405 6.96748 17.9406H12.4634C12.9622 17.9406 13.3703 17.5325 13.3703 17.0337ZM12.9532 12.4991H9.15316L8.21903 8.78075C9.37989 9.43373 10.6042 9.94161 11.9374 9.95975C12.4634 9.96881 12.8897 9.51535 12.8897 8.98934C12.8897 8.45426 12.4453 8.04614 11.9102 8.028C10.7221 7.99173 9.525 7.52013 8.63622 6.8218L7.14887 5.67001C6.94028 5.50676 6.70448 5.39793 6.45961 5.32538C6.16831 5.23945 5.8613 5.22084 5.56176 5.27097H5.54362C5.00956 5.36578 4.53457 5.66771 4.22204 6.11102C3.90951 6.55434 3.78474 7.10316 3.87488 7.63803L5.09923 13.007C5.21885 13.6291 5.55128 14.1902 6.03945 14.594C6.52763 14.9978 7.14112 15.2191 7.77464 15.2199H13.9871L16.7894 17.4146C17.1703 17.7139 17.7145 17.6776 18.0501 17.3421C18.4582 16.934 18.4128 16.2719 17.9594 15.9182L14.0687 12.88C13.7493 12.633 13.3569 12.4991 12.9532 12.4991Z"
            fill="#AAAAAA"
        />
    </Svg>
);
export default SelectedSeatSVGComponent;