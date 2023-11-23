import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const NotificationSVGComponent = props => (
  <Svg
    width={props.width ?? 33}
    height={props.height ?? 34}
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M24.7041 12.1392C24.7041 9.81829 23.8397 7.59243 22.3011 5.9513C20.7626 4.31016 18.6758 3.38818 16.5 3.38818C14.3241 3.38818 12.2374 4.31016 10.6988 5.9513C9.16024 7.59243 8.29589 9.81829 8.29589 12.1392C8.29589 22.3487 4.19385 25.2657 4.19385 25.2657H28.8061C28.8061 25.2657 24.7041 22.3487 24.7041 12.1392Z"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.8653 29.3677C18.6249 29.7821 18.2799 30.1261 17.8647 30.3652C17.4496 30.6043 16.9789 30.7302 16.4998 30.7302C16.0207 30.7302 15.55 30.6043 15.1349 30.3652C14.7197 30.1261 14.3747 29.7821 14.1343 29.3677"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default NotificationSVGComponent;
