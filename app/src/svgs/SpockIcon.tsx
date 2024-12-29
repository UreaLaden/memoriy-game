import { iSelectorIconProps } from "../utils/models";
import { FC } from "react";
import { SvgContainer } from "./SvgContainer.component";

export const SpockIcon: FC<iSelectorIconProps> = (props) => (
  <SvgContainer {...props}>
    <path
      d="M1.18913 34.6269C2.84496 32.8675 5.61379 32.7835 7.37352 34.4396L14 40.6762V31.9913L9.73384 13.22C9.19834 10.8639 10.6742 8.51976 13.0304 7.98426C15.3873 7.44898 17.7308 8.92478 18.2662 11.2809L22.0661 28.0004H23.1416L17.9393 5.35609C17.3983 3.00114 18.8687 0.653622 21.2236 0.112653C23.5786 -0.428753 25.926 1.04212 26.467 3.39697L32.1195 28.0004H33.7716L39.0681 6.81428C39.654 4.47015 42.0294 3.045 44.3736 3.63103C46.7177 4.21706 48.1429 6.59236 47.5568 8.93648L42.7909 28.0004H44.0028L47.368 13.8621C47.9277 11.5115 50.2867 10.0593 52.6374 10.6194C54.988 11.1791 56.4398 13.5382 55.88 15.8888L51.9106 32.5649C51.7209 33.3616 51.625 34.1778 51.625 34.9968V39.6017C51.625 40.6122 51.4791 41.6174 51.1919 42.5862L48.3291 52.2426C47.6684 54.4716 45.6204 56.0004 43.2957 56.0004H19.5969C18.2596 56.0004 16.9726 55.4901 15.9987 54.5735L1.37649 40.8113C-0.383024 39.1553 -0.466805 36.3864 1.18913 34.6269Z"
      fill={props.primaryFill}
    />
    <mask
      id="mask0--spock"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={props.vbWidth}
      height={props.vbHeight}
    >
      <path
        d="M1.18913 34.6269C2.84496 32.8675 5.61379 32.7835 7.37352 34.4396L14 40.6762V31.9913L9.73384 13.22C9.19834 10.8639 10.6742 8.51976 13.0304 7.98426C15.3873 7.44898 17.7308 8.92478 18.2662 11.2809L22.0661 28.0004H23.1416L17.9393 5.35609C17.3983 3.00114 18.8687 0.653622 21.2236 0.112653C23.5786 -0.428753 25.926 1.04212 26.467 3.39697L32.1195 28.0004H33.7716L39.0681 6.81428C39.654 4.47015 42.0294 3.045 44.3736 3.63103C46.7177 4.21706 48.1429 6.59236 47.5568 8.93648L42.7909 28.0004H44.0028L47.368 13.8621C47.9277 11.5115 50.2867 10.0593 52.6374 10.6194C54.988 11.1791 56.4398 13.5382 55.88 15.8888L51.9106 32.5649C51.7209 33.3616 51.625 34.1778 51.625 34.9968V39.6017C51.625 40.6122 51.4791 41.6174 51.1919 42.5862L48.3291 52.2426C47.6684 54.4716 45.6204 56.0004 43.2957 56.0004H19.5969C18.2596 56.0004 16.9726 55.4901 15.9987 54.5735L1.37649 40.8113C-0.383024 39.1553 -0.466805 36.3864 1.18913 34.6269Z"
        fill={props.secondaryFill}
      />
    </mask>
    <g mask="url(#mask0--spock)">
      <rect
        width={props.vbWidth}
        height={props.vbHeight}
        fill={props.primaryFill}
      />
    </g>
  </SvgContainer>
);
