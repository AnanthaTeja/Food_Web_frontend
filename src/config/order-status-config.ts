import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressvalue: number;
};
export const ORDER_STATUS: OrderStatusInfo[] = [
  {
    label: "Placed",
    value: "placed",
    progressvalue: 0,
  },
  {
    label: "Awaiting Restaurant Confirmation",
    value: "paid",
    progressvalue: 25,
  },
  {
    label: "In Progress",
    value: "inProgress",
    progressvalue: 50,
  },
  {
    label: "Out for Delivery",
    value: "outForDelivery",
    progressvalue: 75,
  },
  {
    label: "Delivered",
    value: "delivered",
    progressvalue: 100,
  },
];
