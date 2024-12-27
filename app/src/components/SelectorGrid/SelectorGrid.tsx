import { FC, useCallback, useMemo, useState } from "react";
import Selector from "../Selector/Selector";
import { SelectorMode, SelectorState } from "../../utils/models";
import { SelectorGridContainer } from "./SelectorGrid.component";

export interface SelectorGridProps {
  gridSize: 4 | 6;
  gridMode: SelectorMode;
}
const SelectorGrid: FC<SelectorGridProps> = ({ gridSize, gridMode }) => {
  const [gridOptions, setGridOptions] = useState<Map<number, string[]>>(
    new Map()
  );

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
      const state: SelectorState = wasSelected ? "inactive" : "hidden";

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
  }, [selectorOptions, gridOptions, gridMode, gridSize, onGridOptionSelected]);
  return (
    <SelectorGridContainer gridsize={gridSize}>{Grid}</SelectorGridContainer>
  );
};

export default SelectorGrid;
