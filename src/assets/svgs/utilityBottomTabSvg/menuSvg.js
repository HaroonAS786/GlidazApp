import * as React from 'react';
import Svg, {Line} from 'react-native-svg';
const MenuSVGComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ? props.width : 8}
    height={props.height ? props.height : 8}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-menu"
    {...props}>
    <Line x1={3} y1={12} x2={21} y2={12} />
    <Line x1={3} y1={6} x2={21} y2={6} />
    <Line x1={3} y1={18} x2={21} y2={18} />
  </Svg>
);
export default MenuSVGComponent;
