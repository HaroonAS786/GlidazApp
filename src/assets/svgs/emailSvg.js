import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const EmailSVGComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7 9L12 12.5L17 9"
      stroke="#92929D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
      stroke="#92929D"
      strokeWidth={1.5}
    />
  </Svg>
);
export default EmailSVGComponent;