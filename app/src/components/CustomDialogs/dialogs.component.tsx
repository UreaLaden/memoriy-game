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

export const SubHeader = styled.h3`
  color: ${Colors["--air-force-blue"]};
  fontweight: 700;
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
  pointer-events: none;
`;
