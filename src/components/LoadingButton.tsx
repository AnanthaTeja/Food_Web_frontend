import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

function LoadingButton() {
  return (
    <Button disabled>
      <Loader2 className="nr-2 h-4 w-4 animate-spin">Loading</Loader2>
    </Button>
  );
}
export default LoadingButton;
