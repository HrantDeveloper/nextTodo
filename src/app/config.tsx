import { WiDaySunny } from "react-icons/wi";
import { FaRegStar } from "react-icons/fa6";
import { CgMenuBoxed } from "react-icons/cg";
import { GoHome } from "react-icons/go";

export const navBarData = [
  {
    id: "myDay",
    title: "My Day",
    icon: <WiDaySunny />,
    path: "/",
  },
  {
    id: "important",
    title: "Important",
    icon: <FaRegStar />,
    path: "important",
  },
  {
    id: "planned",
    title: "Planned",
    icon: <CgMenuBoxed />,
    path: "planned",
  },
  {
    id: "tasks",
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
