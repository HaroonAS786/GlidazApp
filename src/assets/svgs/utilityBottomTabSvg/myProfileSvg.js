import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const MyProfileSVGComponent = props => (
  <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.9999 17.0613C20.0206 17.0613 22.4693 14.6126 22.4693 11.5919C22.4693 8.57129 20.0206 6.12256 16.9999 6.12256C13.9792 6.12256 11.5305 8.57129 11.5305 11.5919C11.5305 14.6126 13.9792 17.0613 16.9999 17.0613Z"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M30.6734 24.2808C30.6734 25.1031 30.3486 25.893 29.7686 26.4772C28.4336 27.8227 27.1388 29.2255 25.7539 30.5222C25.4364 30.815 24.9328 30.8043 24.6291 30.4982L20.6391 26.4772C19.4331 25.2618 19.4331 23.2997 20.6391 22.0843C21.857 20.857 23.841 20.857 25.0589 22.0843L25.2039 22.2305L25.3488 22.0844C25.9328 21.4957 26.728 21.1636 27.5588 21.1636C28.3895 21.1636 29.1847 21.4956 29.7686 22.0843C30.3487 22.6687 30.6734 23.4585 30.6734 24.2808Z"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinejoin="round"
    />
    <Path
      d="M7.42847 28.0003V26.633C7.42847 21.3468 11.7137 17.0615 16.9999 17.0615C18.4679 17.0615 19.8587 17.392 21.1019 17.9826"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MyProfileSVGComponent;
