import { cusineList } from "@/config/restaurant-options-config";
import { BookOpenCheck, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Label } from "./ui/label";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cusines: string[]) => void;
  selectedCusines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};
const CusinesFilter = ({
  onChange,
  selectedCusines,
  isExpanded,
  onExpandedClick,
}: Props) => {
  const handleCusinesReset = () => onChange([]);
  const handleCusinesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCusine = event.target.value;
    const isChecked = event.target.checked;

    const newCusinesList = isChecked
      ? [...selectedCusines, clickedCusine]
      : selectedCusines.filter((cusine) => cusine !== clickedCusine);

    onChange(newCusinesList);
  };
  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By Cusine</div>
        <div
          onClick={handleCusinesReset}
          className="tex-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset Filters
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        {cusineList
          .slice(0, isExpanded ? cusineList.length : 7)
          .map((cusine) => {
            const isSelected = selectedCusines.includes(cusine);
            return (
              <div className="flex">
                <input
                  id={`cusine_${cusine}`}
                  type="checkbox"
                  className="hidden"
                  value={cusine}
                  checked={isSelected}
                  onChange={handleCusinesChange}
                />
                <Label
                  htmlFor={`cusine_${cusine}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-greem-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cusine}
                </Label>
              </div>
            );
          })}
        <Button
          onClick={onExpandedClick}
          variant="link"
          className="mt-4 flex-1"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};
export default CusinesFilter;
