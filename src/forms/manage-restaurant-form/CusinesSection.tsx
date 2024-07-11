import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cusineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CusineCheckBox from "./CusineCheckBox";

export default function CusinesSection() {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cusines</h2>
        <FormDescription>
          Select the cusines that your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cusines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {cusineList.map((cusineItem) => (
                <CusineCheckBox cusine={cusineItem} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
    </div>
  );
}
