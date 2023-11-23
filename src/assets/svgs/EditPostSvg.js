import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EditPost = (props) => (
    <Svg
        width={20}
        height={21}
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11.8094 5.41728L13.0128 4.21392C13.6479 3.57886 14.6775 3.57886 15.3126 4.21392L16.4624 5.3638C17.0975 5.99886 17.0975 7.02849 16.4624 7.66355L15.2591 8.8669M11.8094 5.41728L3.99111 13.2356C3.7211 13.5056 3.55472 13.862 3.52112 14.2424L3.32429 16.4706C3.27975 16.9747 3.70164 17.3966 4.20576 17.3521L6.43395 17.1552C6.81432 17.1216 7.17073 16.9553 7.44073 16.6852L15.2591 8.8669M11.8094 5.41728L15.2591 8.8669"
            stroke="black"
            strokeWidth={1.21963}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default EditPost;
