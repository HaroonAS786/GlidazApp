import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
const ResetPasswordLogoSVGComponent = props => (
  <Svg
    width={74}
    height={74}
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M29.9167 32.7497L37.0001 37.708L44.0834 32.7497"
      stroke="#2563EB"
      strokeWidth={2.125}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.8333 44.083V29.9163C22.8333 28.3515 24.1018 27.083 25.6666 27.083H48.3333C49.8981 27.083 51.1666 28.3515 51.1666 29.9163V44.083C51.1666 45.6478 49.8981 46.9163 48.3332 46.9163H25.6666C24.1018 46.9163 22.8333 45.6478 22.8333 44.083Z"
      stroke="#2563EB"
      strokeWidth={2.125}
    />
    <Rect x={0.5} y={0.5} width={73} height={73} rx={36.5} stroke="#2563EB" />
  </Svg>
);
export default ResetPasswordLogoSVGComponent;
