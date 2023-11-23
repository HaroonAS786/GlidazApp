import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const HomeSVGComponent = props => (
  <Svg
    width={33}
    height={33}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.73486 10.939L16.0414 4.28568C16.2724 4.17019 16.5443 4.17019 16.7752 4.28568L30.0818 10.939"
      stroke={props.stroke ? props.stroke : 'white'}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M27.3468 15.041V25.9798C27.3468 27.4901 26.1224 28.7145 24.6121 28.7145H8.20393C6.6936 28.7145 5.46924 27.4901 5.46924 25.9798V15.041"
      stroke={props.stroke ? props.stroke : 'white'}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HomeSVGComponent;
