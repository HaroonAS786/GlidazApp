import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const PassLockSVGComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20L6.6 20C6.26863 20 6 19.7314 6 19.4L6 12.6C6 12.2686 6.26863 12 6.6 12H8M16 12L16 8C16 6.66667 15.2 4 12 4C8.8 4 8 6.66667 8 8L8 12M16 12L8 12"
      stroke="#92929D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PassLockSVGComponent;
