import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SettingsSVGComponent = props => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.5775 18.8742C16.5902 18.8742 18.2219 17.2426 18.2219 15.2298C18.2219 13.2171 16.5902 11.5854 14.5775 11.5854C12.5647 11.5854 10.9331 13.2171 10.9331 15.2298C10.9331 17.2426 12.5647 18.8742 14.5775 18.8742Z"
      stroke={props.color}
      strokeWidth={1.82219}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.8372 13.2802L22.5038 10.0603L24.2959 7.94071L21.8664 5.51113L19.7583 7.31261L16.47 5.96028L15.7138 3.08154H13.3397L12.5721 5.99841L9.35936 7.3527L7.28885 5.51113L4.85927 7.94071L6.62481 10.1138L5.31178 13.3421L2.42969 14.0147V16.4442L5.34654 17.2406L6.70059 20.4527L4.85927 22.5182L7.28885 24.9478L9.46474 23.1746L12.6303 24.4768L13.3628 27.3774H15.7924L16.5268 24.4779L19.7467 23.1445C20.2833 23.5281 21.8664 24.9478 21.8664 24.9478L24.2959 22.5182L22.4931 20.3916L23.8269 17.1707L26.7254 16.4165L26.7255 14.0147L23.8372 13.2802Z"
      stroke={props.color}
      strokeWidth={1.82219}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SettingsSVGComponent;
