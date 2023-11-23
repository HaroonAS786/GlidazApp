import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PlaneSVGComponent = (props) => (
    <Svg
        width={21}
        height={20}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M7.16683 18.3334L8.8335 18.3334L13.0002 11.2501L17.5835 11.2501C18.2752 11.2501 18.8335 10.6917 18.8335 10.0001C18.8335 9.30841 18.2752 8.75008 17.5835 8.75008L13.0002 8.75008L8.8335 1.66675L7.16683 1.66675L9.25016 8.75008L4.66683 8.75008L3.41683 6.66675L2.16683 6.66675L3.00016 10.0001L2.16683 13.3334L3.41683 13.3334L4.66683 11.2501L9.25016 11.2501L7.16683 18.3334Z"
            fill="#0284C7"
        />
    </Svg>
);
export default PlaneSVGComponent;
