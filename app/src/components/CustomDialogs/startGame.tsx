import { DialogActions, DialogContent } from "@mui/material";
import React, { FC, useCallback, useMemo, useState } from "react";
import { Colors } from "../../utils/constants";
import ActionButton from "../ActionButton/ActionButton";
import { SubHeader, OptionContainer, Option } from "./dialogs.component";
import { iGrid, iSelection, PlayerId, SelectorMode } from "../../utils/models";
import useGameContext from "../../utils/hooks/useGameContext";
import { toTitleCase } from "../../utils/helpers";

export const Start: FC = () => {
  const context = useGameContext();

  const [selectedOptions, setSelectedOptions] = useState<iSelection>({
    theme: "digit",
    playerCount: 1,
    gridSize: 4,
  });

  const themes = useMemo(() => ["numbers", "icons"], []);

  const onStartGame = useCallback(() => {
    context.newGame(
      selectedOptions.theme,
      selectedOptions.playerCount,
      selectedOptions.gridSize
    );
  }, [selectedOptions]);

  const onOptionSelected = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget.textContent?.toLowerCase();
    if (!target) {
      throw new Error("Invalid or missing target");
    }

    if (themes.includes(target)) {
      setSelectedOptions((prev) => ({
        ...prev,
        theme: target === "numbers" ? "digit" : "graphic",
      }));
      return;
    }

    const count = Number(target) as PlayerId;
    if (count) {
      setSelectedOptions((prev) => ({
        ...prev,
        playerCount: count,
      }));

      return;
    }

    const gridSize = parseInt(target) as iGrid;
    if (gridSize) {
      setSelectedOptions((prev) => ({
        ...prev,
        gridSize: gridSize,
      }));
      return;
    }
  };

  const currentColor = useCallback(
    (content: string) => {
      const text = content.toLowerCase();
      if (themes.includes(text)) {
        const translatedValue: SelectorMode =
          text === "numbers" ? "digit" : "graphic";

        return selectedOptions.theme === translatedValue
          ? Colors["--charcoal"]
          : Colors["--columbia-blue"];
      }
      const count = Number(text) as PlayerId;
      if (count) {
        return selectedOptions.playerCount === count
          ? Colors["--charcoal"]
          : Colors["--columbia-blue"];
      }
      const gridSize = parseInt(text) as iGrid;
      if (gridSize) {
        return selectedOptions.gridSize === gridSize
          ? Colors["--charcoal"]
          : Colors["--columbia-blue"];
      }
    },
    [selectedOptions]
  );

  return (
    <React.Fragment>
      <DialogContent>
        <SubHeader>Select Theme</SubHeader>
        <OptionContainer>
          {themes.map((val, idx) => (
            <Option
              key={idx + val}
              onClick={onOptionSelected}
              bgcolor={currentColor(val)}
            >
              {toTitleCase(val)}
            </Option>
          ))}          
        </OptionContainer>

        <SubHeader>Numbers of Players</SubHeader>
        <OptionContainer>
          {[1, 2, 3, 4].map((val, idx) => (
            <Option
              key={idx + val}
              onClick={onOptionSelected}
              bgcolor={currentColor(`${val}`)}
            >
              {val}
            </Option>
          ))}
        </OptionContainer>
        <SubHeader>Grid Size</SubHeader>
        <OptionContainer>
        {['4x4','6x6'].map((val, idx) => (
            <Option
              key={idx + val}
              onClick={onOptionSelected}
              bgcolor={currentColor(val)}
            >
              {toTitleCase(val)}
            </Option>
          ))}          
        </OptionContainer>
      </DialogContent>
      <DialogActions sx={{ margin: "0 1em 1em 1em" }}>
        <ActionButton
          text={"Start Game"}
          onClick={onStartGame}
          isPrimary={true}
        />
      </DialogActions>
    </React.Fragment>
  );
};
