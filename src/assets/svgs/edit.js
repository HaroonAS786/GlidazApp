import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Edit = (props) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M9.39654 4.24861L10.2711 3.37407C10.7326 2.91254 11.4809 2.91254 11.9424 3.37407L12.7781 4.20974C13.2396 4.67127 13.2396 5.41955 12.7781 5.88108L11.9036 6.75562M9.39654 4.24861L3.71456 9.93059C3.51834 10.1268 3.39742 10.3858 3.373 10.6623L3.22995 12.2816C3.19758 12.648 3.50419 12.9546 3.87056 12.9222L5.4899 12.7792C5.76633 12.7547 6.02535 12.6338 6.22158 12.4376L11.9036 6.75562M9.39654 4.24861L11.9036 6.75562"
            stroke={props.stroke ? props.stroke : "black"}
            strokeWidth={0.886364}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Edit;
