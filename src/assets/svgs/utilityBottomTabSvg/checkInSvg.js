import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CheckInSVGComponent = props => (
  <Svg
    width={34}
    height={33}
    viewBox="0 0 34 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.2312 7.72751L22.2549 5.70385C23.3228 4.63588 25.0543 4.63588 26.1223 5.70385L28.056 7.63757C29.124 8.70553 29.124 10.437 28.056 11.505L26.0324 13.5287M20.2312 7.72751L7.08326 20.8755C6.6292 21.3295 6.3494 21.9289 6.2929 22.5685L5.96188 26.3156C5.88699 27.1634 6.59647 27.8729 7.44424 27.798L11.1913 27.467C11.831 27.4105 12.4304 27.1307 12.8844 26.6766L26.0324 13.5287M20.2312 7.72751L26.0324 13.5287"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CheckInSVGComponent;
