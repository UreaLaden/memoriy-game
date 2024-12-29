import { FC } from "react";
import { iSelectorIconProps } from "../utils/models";
import { SvgContainer } from "./SvgContainer.component";

export const FlaskIcon: FC<iSelectorIconProps> = (props) => (
  <SvgContainer {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.499 23.5156L51.3177 44.1328C54.5224 49.2734 50.8365 56 44.7443 56H11.2537C5.17241 56 1.47554 49.2844 4.68022 44.1328L17.499 23.5156V7H16.624C15.1693 7 13.999 5.82969 13.999 4.375V2.625C13.999 1.17031 15.1693 0 16.624 0H39.374C40.8287 0 41.999 1.17031 41.999 2.625V4.375C41.999 5.82969 40.8287 7 39.374 7H38.499V23.5156ZM23.8537 26.5125L18.5818 35H37.3943L32.1224 26.5125C31.7287 25.9437 31.488 25.2547 31.488 24.5V7H24.488V24.5C24.488 25.2437 24.2584 25.9437 23.8537 26.5125Z"
      fill={props.primaryFill}
    />
    <mask
      id="mask0--flask"
      maskUnits="userSpaceOnUse"
      x="3"
      y="0"
      width={props.vbWidth}
      height={props.vbHeight}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.499 23.5156L51.3177 44.1328C54.5224 49.2734 50.8365 56 44.7443 56H11.2537C5.17241 56 1.47554 49.2844 4.68022 44.1328L17.499 23.5156V7H16.624C15.1693 7 13.999 5.82969 13.999 4.375V2.625C13.999 1.17031 15.1693 0 16.624 0H39.374C40.8287 0 41.999 1.17031 41.999 2.625V4.375C41.999 5.82969 40.8287 7 39.374 7H38.499V23.5156ZM23.8537 26.5125L18.5818 35H37.3943L32.1224 26.5125C31.7287 25.9437 31.488 25.2547 31.488 24.5V7H24.488V24.5C24.488 25.2437 24.2584 25.9437 23.8537 26.5125Z"
        fill={props.secondaryFill}
      />
    </mask>
    <g mask="url(#mask0--flask)">
      <rect
        width={props.vbWidth}
        height={props.vbHeight}
        fill={props.primaryFill}
      />
    </g>
  </SvgContainer>
);
