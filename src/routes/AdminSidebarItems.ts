// import AllParcels from "@/pages/admin/AllParcels";
// import AllUsers from "@/pages/admin/AllUsers";
import AdminOverview from "@/pages/admin/AdminOverview";
import AllServices from "@/pages/admin/AllServices";
import type { ISidebarItems } from "@/types";
import { lazy } from "react";

const AllUsers = lazy( ()=> import('@/pages/admin/AllUsers')) ;
const AllParcels = lazy( ()=> import('@/pages/admin/AllParcels')) ;

export const AdminSidebarItems : ISidebarItems[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Overview",
        url: "/admin/overview",
        component : AdminOverview,
      },
      {
        title: "All Manage Users",
        url: "/admin/all-users",
        component : AllUsers,
      },
      {
        title: "Manage All Parcels",
        url: "/admin/all-parcels",
        component : AllParcels,
      },
      {
        title: "Manage All Services",
        url: "/admin/all-services",
        component : AllServices,
      },
    ],
  },
];
