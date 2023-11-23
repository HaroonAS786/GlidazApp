import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LikeSVGComponent = (props) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10.4557 13.078H2.60252C2.39219 13.078 2.22168 12.9075 2.22168 12.6971V6.47677C2.22168 6.26644 2.39219 6.09593 2.60252 6.09593H4.35921C4.80512 6.09593 5.21834 5.86197 5.44776 5.4796L7.16816 2.61228C7.53937 1.99359 8.41372 1.93478 8.86444 2.49818C9.0769 2.76375 9.14538 3.11672 9.04766 3.44247L8.3987 5.60566C8.3254 5.85001 8.50837 6.09593 8.76348 6.09593H11.6674C12.5045 6.09593 13.1124 6.89185 12.8922 7.69941L11.6804 12.1425C11.5298 12.6948 11.0281 13.078 10.4557 13.078Z"
            stroke="black"
            strokeWidth={0.952096}
            strokeLinecap="round"
        />
        <Path
            d="M4.44287 13.0779V6.09585"
            stroke="black"
            strokeWidth={0.952096}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default LikeSVGComponent;
