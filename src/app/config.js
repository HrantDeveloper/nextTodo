import { WiDaySunny } from "react-icons/wi";
import { FaRegStar } from "react-icons/fa6";
import { CgMenuBoxed } from "react-icons/cg";
import { GoHome } from "react-icons/go";

export const navBarData = [
  {
    id: 1,
    title: "My Day",
    icon: <WiDaySunny />,
    path: "/",
  },
  {
    id: 2,
    title: "Important",
    icon: <FaRegStar />,
    path: "important",
  },
  {
    id: 3,
    title: "Planned",
    icon: <CgMenuBoxed />,
    path: "planned",
  },
  {
    id: 4,
    title: "Tasks",
    icon: <GoHome />,
    path: "tasks",
  },
];

export const dateChangerTypesData = [
  {
    id: 1,
    name: "Today",
  },
  {
    id: 2,
    name: "Tomorrow",
  },
  {
    id: 3,
    name: "Next week",
  },
  {
    id: 4,
    name: "Pick a date",
  },
];
