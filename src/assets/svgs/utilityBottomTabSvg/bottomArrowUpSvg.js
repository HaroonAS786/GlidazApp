import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BottomArrowUpSVGComponent = props => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13 7L7 1L1 7"
      stroke="#F9FAFB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 10L7 4L1 10"
      stroke="#D1D5DB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 13L7 7L1 13"
      stroke="#6B7280"
      strokeOpacity={0.4}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BottomArrowUpSVGComponent;
