// import { Restaurant } from "@/types";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Dot } from "lucide-react";

// type Props = {
//   restaurant: Restaurant;
// };
// const RestaurantInfo = ({ restaurant }: Props) => {
//   return (
//     <Card className="border-sla">
//       <CardHeader>
//         <CardTitle className="text-3xl font-bold tracking-tight">
//           {restaurant.restaurantName}
//         </CardTitle>
//         <CardDescription>
//           {restaurant.city},{restaurant.country}
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="flex">
//         {restaurant.cusines.map((item, index) => (
//           <span className="flex">
//             <span>{item}</span>
//             {index < restaurant.cusines.length - 1 && <Dot />}
//           </span>
//         ))}
//       </CardContent>
//     </Card>
//   );
// };

// export default RestaurantInfo;

import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  // Ensure restaurant and restaurant.cusines are defined
  const cuisines = restaurant.cusines || [];

  return (
    <Card className="border-sla">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight">
          {restaurant.restaurantName || "Restaurant Name"}
        </CardTitle>
        <CardDescription>
          {restaurant.city || "City"}, {restaurant.country || "Country"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex">
        {cuisines.length > 0 ? (
          cuisines.map((item, index) => (
            <span className="flex" key={index}>
              <span>{item}</span>
              {index < cuisines.length - 1 && <Dot />}
            </span>
          ))
        ) : (
          <div>No cuisines available</div>
        )}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
