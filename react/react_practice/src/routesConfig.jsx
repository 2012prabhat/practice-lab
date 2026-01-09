import Home from "./pages/Home.jsx";
import UserList from "./pages/HOC/UserList.jsx";
import Memo from "./pages/Memo/Memo.jsx";
import HookUseMemo from "./pages/Hooks/HookUseMemo.jsx";
import ValidationFrom from "./pages/ValidationForm.jsx";
import Debounce from "./pages/Debounce.jsx";
import ThrottleWithEffect from "./pages/Throttling.jsx";
import TableSearchSortPagination from "./pages/Table.jsx";

export const routesConfig = [
  {
    path: "/",
    label: "Home",
    element: <Home />,
    showOnHome: false, // ❌ don't show home on home page
  },
  {
    path: "/hoc",
    label: "HOC Example",
    element: <UserList />,
    showOnHome: true,
  },
  {
    path: "/memo",
    label: "React.memo",
    element: <Memo />,
    showOnHome: true,
  },
  {
    path: "/hooks/usememo",
    label: "useMemo Hook",
    element: <HookUseMemo />,
    showOnHome: true,
  },
  {
    path: "/form",
    label: "Form Validation",
    element: <ValidationFrom />,
    showOnHome: true,
  },
  {
    path: "/debounce",
    label: "Debounce",
    element: <Debounce />,
    showOnHome: true,
  },
  {
    path: "/throttle",
    label: "Throttle",
    element: <ThrottleWithEffect />,
    showOnHome: true,
  },
  {
    path: "/table",
    label: "Table Search / Sort / Pagination",
    element: <TableSearchSortPagination />,
    showOnHome: true,
  },
];
