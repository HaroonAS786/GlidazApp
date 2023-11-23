
import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const VoiceRecord = (props) => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={9}
      y={2.9707}
      width={6}
      height={12}
      rx={3}
      stroke="#E0E3EF"
      strokeWidth={1.5}
    />
    <Path
      d="M5 10.9707V11.9707C5 15.8367 8.13401 18.9707 12 18.9707V18.9707V18.9707C15.866 18.9707 19 15.8367 19 11.9707V10.9707"
      stroke="#E0E3EF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 18.9707V22.9707M12 22.9707H9M12 22.9707H15"
      stroke="#E0E3EF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default VoiceRecord;
