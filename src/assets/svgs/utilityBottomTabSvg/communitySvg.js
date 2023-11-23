import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const CommunitySVGComponent = props => (
  <Svg
    width={33}
    height={33}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_1_2564)">
      <Path
        d="M1.45898 27.347V25.9796C1.45898 20.6935 5.74426 16.4082 11.0304 16.4082V16.4082C16.3166 16.4082 20.6018 20.6935 20.6018 25.9796V27.347"
        stroke={props.color}
        strokeWidth={2.05102}
        strokeLinecap="round"
      />
      <Path
        d="M17.8672 19.1429V19.1429C17.8672 15.3671 20.9281 12.3062 24.7039 12.3062V12.3062C28.4797 12.3062 31.5407 15.3671 31.5407 19.1429V19.8266"
        stroke={props.color}
        strokeWidth={2.05102}
        strokeLinecap="round"
      />
      <Path
        d="M11.0304 16.408C14.0511 16.408 16.4998 13.9593 16.4998 10.9386C16.4998 7.91797 14.0511 5.46924 11.0304 5.46924C8.00976 5.46924 5.56104 7.91797 5.56104 10.9386C5.56104 13.9593 8.00976 16.408 11.0304 16.408Z"
        stroke={props.color}
        strokeWidth={2.05102}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.7041 12.3061C26.9696 12.3061 28.8061 10.4696 28.8061 8.20409C28.8061 5.9386 26.9696 4.10205 24.7041 4.10205C22.4386 4.10205 20.6021 5.9386 20.6021 8.20409C20.6021 10.4696 22.4386 12.3061 24.7041 12.3061Z"
        stroke={props.color}
        strokeWidth={2.05102}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_2564">
        <Rect
          width={32.8163}
          height={32.8163}
          fill="white"
          transform="translate(0.0917969)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CommunitySVGComponent;
