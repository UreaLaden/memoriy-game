import { FC, useCallback, useEffect, useMemo, useState } from "react";
import Selector from "../Selector/Selector";
import { SelectorMode, SelectorState } from "../../utils/models";
import { SelectorGridContainer } from "./SelectorGrid.component";
import { useGetDimensions } from "../../utils/hooks/useGetDimensions";
import {
  DESKTOP_WIDTH,
  GameState,
  MOBILE_WIDTH,
  TABLET_WIDTH,
} from "../../utils/constants";
import { useGameContext } from "../../utils/hooks/useGameContext";

export interface SelectorGridProps {
  gridSize: 4 | 6;
  gridMode: SelectorMode;
}
const SelectorGrid: FC<SelectorGridProps> = ({ gridMode }) => {
  const context = useGameContext();

  const gridSize = useMemo(
    () => context.game.gridSize,
    [context.game.gridSize]
  );

  const [gridOptions, setGridOptions] = useState<Map<number, string[]>>(
    new Map()
  );
  const dimension = useGetDimensions();

  useEffect(() => {
    if(context.game.state === GameState.START){
      setGridOptions(new Map());
    }
  },[context.game.state])

  const pixelSize = useMemo(() => {
    if (dimension.width <= MOBILE_WIDTH) {
      return gridSize === 4 ? 75 : 50;
    }
    if (dimension.width <= TABLET_WIDTH) {
      return gridSize === 4 ? 175 : 150;
    }
    if (dimension.width <= DESKTOP_WIDTH) {
      return gridSize === 4 ? 150 : 100;
    }
    return gridSize === 4 ? 150 : 100;
  }, [dimension, gridSize]);

  const onGridOptionSelected = useCallback((selection: number, id: string) => {
    setGridOptions((prev) => {
      const updatedOptions = new Map(prev);

      const prevSelections = updatedOptions.get(selection) || [];

      if (prevSelections.length > 1 && prevSelections.includes(id)) {
        return updatedOptions;
      }

      const updatedSelections = [...prevSelections, id];

      updatedOptions.set(selection, updatedSelections);

      return updatedOptions;
    });
  }, []);

  function shuffleArray<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const selectorOptions = useMemo(() => {
    const cells = Array.from({ length: gridSize ** 2 }).map((_, i) => i + 1);
    const mid = Math.ceil(cells.length / 2);
    const values = cells.slice(0, mid);

    const grid = shuffleArray(
      values.concat(values).map((option, idx) => ({
        id: `selector-${option}-${idx}`,
        value: option,
      }))
    );
    return grid;
  }, [gridSize]);

  const Grid = useMemo(() => {
    return selectorOptions.map((val) => {
      const options = gridOptions.get(val.value) || [];
      const wasSelected = options.includes(val.id);

      let state: SelectorState = wasSelected ? "inactive" : "hidden";
      
      return (
        <div key={val.id}>
          <Selector
            id={val.id}
            mode={gridMode}
            gridSize={gridSize}
            state={state}
            value={val.value}
            onClick={onGridOptionSelected}
          />
        </div>
      );
    });
  }, [
    selectorOptions,
    context.game.state,
    gridOptions,
    gridMode,
    gridSize,
    onGridOptionSelected,
    pixelSize,
  ]);
  return (
    <SelectorGridContainer gridsize={gridSize} pixelsize={pixelSize}>
      {Grid}
    </SelectorGridContainer>
  );
};

export default SelectorGrid;
