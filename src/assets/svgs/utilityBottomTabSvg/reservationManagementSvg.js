import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ReservationManagementSVGComponent = props => (
  <Svg
    width={33}
    height={34}
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.82666 15.3673V6.61631C2.82666 6.16321 3.19397 5.7959 3.64707 5.7959H12.0946C12.2904 5.7959 12.4798 5.86595 12.6285 5.99341L16.9534 9.70043C17.1021 9.82788 17.2915 9.89794 17.4873 9.89794H29.3532C29.8063 9.89794 30.1736 10.2652 30.1736 10.7183V15.3673M2.82666 15.3673V26.853C2.82666 27.3061 3.19397 27.6734 3.64707 27.6734H29.3532C29.8063 27.6734 30.1736 27.3061 30.1736 26.853V15.3673M2.82666 15.3673H30.1736"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ReservationManagementSVGComponent;
