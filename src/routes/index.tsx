import App from "@/App";
import { withAuth } from "@/components/ults/withAuth";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import type { TRole } from "@/types";
import { createBrowserRouter, Navigate } from "react-router";
import { generateRoutes } from "@/components/ults/generateRoutes";
import { AdminSidebarItems } from "./AdminSidebarItems";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";
import { SenderSidebarItems } from "./SenderSidebarItems";
import { ReceiverSidebarItems } from "./ReceiverSidebarItems";
import UnAuthorized from "@/pages/UnAuthorized";
import TrackParcel from "@/pages/TrackParcel";



export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "track-parcel",
        Component: TrackParcel,
      },
    ],
  },

  // admin routes
  {
    Component: withAuth(DashboardLayout, role.admin as TRole),
    path: "/admin",
    children: [
      {
        path: "",
        // index : true,
        element: <Navigate to="/admin/all-users" />,
      },
      ...generateRoutes(AdminSidebarItems),
    ],
  },


  // sender routes
  {
    Component: withAuth(DashboardLayout, role.sender as TRole),
    path: "/sender",
    children: [
      {
        path: "",
        // index : true,
        element: <Navigate to="/sender/created-parcels" />,
      },
      ...generateRoutes(SenderSidebarItems),
    ],
  },


  // receiver routes
  {
    Component: withAuth(DashboardLayout, role.receiver as TRole),
    path: "/receiver",
    children: [
      {
        path: "",
        // index : true,
        element: <Navigate to="/receiver/incoming-parcels" />,
      },
      ...generateRoutes(ReceiverSidebarItems),
    ],
  },





  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: UnAuthorized,
    path: "/unauthorized",
  },
]);
