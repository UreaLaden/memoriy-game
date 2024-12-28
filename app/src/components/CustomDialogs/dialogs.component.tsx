import { Dialog, styled as styledMUI } from "@mui/material";
import { Colors } from "../../utils/constants";
import styled from "styled-components";

export const BootstrapDialog = styledMUI(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: "2em",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "400px",
    maxWidth: "100%",
    borderRadius: "15px",
    margin: "12px",
    "@media (max-width: 768px)": {
      width: "600px",
    },
    "@media (min-width: 1440px)": {
      width: "800px",
    },
  },
}));

export const StyledBackdrop = styled.div<{ bgcolor?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ bgcolor }) => bgcolor || "rgba(0, 0, 0, 0.8)"};
  z-index: 1300;
`;

export const BackdropHeader = styled.h1`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: ${Colors["--white"]};
  font-weight: 700;
  text-align: center;
  z-index: 1400;
`;

export const SubHeader = styled.h3<{ resetmargin?: boolean }>`
  color: ${Colors["--air-force-blue"]};
  fontweight: 700;
  margin: ${({ resetmargin }) => (resetmargin ? 0 : "1 0")};
  font-size: 1rem;
  white-space: nowrap;
`;

export const MainHeader = styled.h2`
  color: ${Colors["--gunmetal"]};
  fontweight: 700;
  padding: 0;
  lineheight: 1;
  margin: 0;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 1em;
  cursor: pointer;
`;

export const Option = styled.div<{ bgcolor?: string }>`
  color: ${Colors["--white"]};
  background-color: ${({ bgcolor }) => bgcolor || "transparent"};
  padding: 0.5em;
  width: 50%;
  border-radius: 25px;
  text-align: center;
  font-weight: 700;
  font-size: 1.2em;  
  transition:background-color .3s ease-in-out;

  &:hover {
    background-color: ${Colors["--air-force-blue"]};
  }
`;

export const MetricContainer = styled.div<{
  bgcolor?: string;
  fontcolor?: string;
}>`
  color: ${({ fontcolor }) => fontcolor || Colors["--white"]};
  background-color: ${({ bgcolor }) => bgcolor || Colors["--gunmetal"]};
  padding: 1em;
  border-radius: 10px;
`;

export const MetricItemContainer = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
