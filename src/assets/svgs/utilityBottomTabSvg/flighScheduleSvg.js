import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const FlightScheduleSVGComponent = props => (
  <Svg
    width={33}
    height={34}
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.602 5.79622V3.06152M20.602 5.79622V8.53091M20.602 5.79622H14.4489M4.19385 14.0003V26.3064C4.19385 27.0317 4.48197 27.7273 4.99482 28.2401C5.50768 28.753 6.20326 29.0411 6.92854 29.0411H26.0714C26.7967 29.0411 27.4923 28.753 28.0051 28.2401C28.518 27.7273 28.8061 27.0317 28.8061 26.3064V14.0003M4.19385 14.0003H28.8061M4.19385 14.0003V8.53091C4.19385 7.80563 4.48197 7.11004 4.99482 6.59719C5.50768 6.08434 6.20326 5.79622 6.92854 5.79622H9.66324M28.8061 14.0003V8.53091C28.8061 7.80563 28.518 7.11004 28.0051 6.59719C27.4923 6.08434 26.7967 5.79622 26.0714 5.79622H25.3877M9.66324 3.06152V8.53091"
      stroke={props.stroke ? props.stroke : 'white'}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default FlightScheduleSVGComponent;
