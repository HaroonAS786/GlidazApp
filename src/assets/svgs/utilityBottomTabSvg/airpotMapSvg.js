import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const AirportMapSVGComponent = props => (
  <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.0001 30.7351C24.5518 30.7351 30.6736 24.6133 30.6736 17.0617C30.6736 9.51 24.5518 3.38818 17.0001 3.38818C9.44848 3.38818 3.32666 9.51 3.32666 17.0617C3.32666 24.6133 9.44848 30.7351 17.0001 30.7351Z"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.01025 17.7451L11.5307 20.4798L10.1633 25.2655L11.5307 29.3676"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.8369 28.6839L23.1532 25.2655L19.7349 23.8982V19.1125L23.8369 17.7451L29.99 18.4288"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M26.5714 8.17383L25.8878 10.2248L21.1021 10.9085V15.0106L24.5204 13.6432H27.2551L29.9898 15.0106"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.01025 15.0105L7.42862 12.2758L10.847 11.5921L13.5817 7.49006L12.2143 4.75537"
      stroke={props.color}
      strokeWidth={2.05102}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default AirportMapSVGComponent;
