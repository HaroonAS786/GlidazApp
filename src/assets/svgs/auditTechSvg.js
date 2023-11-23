import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Audit = (props) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5.7864 5.063H2.89332C2.09442 5.063 1.44678 5.71064 1.44678 6.50954V13.7422C1.44678 14.5412 2.09442 15.1888 2.89332 15.1888H14.4656C15.2645 15.1888 15.9122 14.5412 15.9122 13.7422V6.50954C15.9122 5.71064 15.2645 5.063 14.4656 5.063H11.5726M5.7864 5.063V2.60388C5.7864 2.36421 5.98069 2.16992 6.22036 2.16992H11.1386C11.3783 2.16992 11.5726 2.36421 11.5726 2.60388V5.063M5.7864 5.063H11.5726"
            stroke="black"
            strokeWidth={1.08491}
        />
    </Svg>
);
export default Audit;
