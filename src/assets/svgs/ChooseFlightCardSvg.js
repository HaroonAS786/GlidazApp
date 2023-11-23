import * as React from "react";
import Svg, { G, Path, Circle, Defs, ClipPath, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const ChooseFlightCardSVGComponent = (props) => (
    <Svg
        width={375}
        height={282}
        viewBox="0 0 375 282"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#filter0_d_1_3871)">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 33.66C16 17.9629 16 10.1143 20.7919 5.16948C20.9157 5.04164 21.0416 4.91574 21.1695 4.79185C26.1143 0 33.9629 0 49.66 0H325.34C341.037 0 348.886 0 353.831 4.79185C353.958 4.91574 354.084 5.04164 354.208 5.16948C359 10.1143 359 17.9629 359 33.66V125.683C354.339 127.33 351 131.775 351 137C351 142.225 354.339 146.67 359 148.317V153.34C359 169.037 359 176.886 354.208 181.831C354.084 181.958 353.958 182.084 353.831 182.208C348.886 187 341.037 187 325.34 187H49.66C33.9629 187 26.1143 187 21.1695 182.208C21.0416 182.084 20.9157 181.958 20.7919 181.831C16 176.886 16 169.037 16 153.34V148.317C20.6608 146.67 24 142.225 24 137C24 131.775 20.6608 127.33 16 125.683V33.66Z"
                fill="white"
            />
        </G>
        <Path
            d="M35 138H342"
            stroke="#D2DCE9"
            strokeLinecap="round"
            strokeDasharray="7 7"
        />
        <Circle cx={110} cy={84} r={3.5} stroke="#D2DCE9" />
        <Circle cx={265} cy={84} r={4} fill="#D2DCE9" />
        <Path
            d="M123 84H252"
            stroke="#D2DCE9"
            strokeLinecap="round"
            strokeDasharray="6 6"
        />
        <Circle cx={188} cy={84} r={18} fill="white" />
        <G filter="url(#filter1_f_1_3871)">
            <Path
                d="M199.778 93.9215C199.807 94.7554 199.159 95.4502 198.332 95.472L192.834 95.664L188.117 103.831L186.117 103.908L188.347 95.8277L182.835 96.0202L181.414 98.0722L179.908 98.1177L180.79 94.5917L179.664 91.1216L181.176 91.0546L182.752 93.0302L188.221 92.8392L185.454 84.9124L187.454 84.8496L192.729 92.6677L198.227 92.4757C199.033 92.4334 199.764 93.1154 199.778 93.9215Z"
                fill="#16988F"
                fillOpacity={0.41}
            />
        </G>
        <G clipPath="url(#clip0_1_3871)">
            <Path
                d="M199.778 83.9215C199.807 84.7554 199.159 85.4502 198.332 85.472L192.834 85.664L188.117 93.8309L186.117 93.9078L188.347 85.8277L182.835 86.0202L181.413 88.0722L179.908 88.1177L180.789 84.5917L179.664 81.1216L181.175 81.0546L182.751 83.0302L188.221 82.8392L185.454 74.9124L187.454 74.8496L192.729 82.6677L198.227 82.4757C199.032 82.4334 199.764 83.1154 199.778 83.9215Z"
                fill="#12B3A8"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1_3871">
                <Rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(187.408 67.04) rotate(43)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default ChooseFlightCardSVGComponent;
