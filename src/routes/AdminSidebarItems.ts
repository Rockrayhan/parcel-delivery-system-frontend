// import AllParcels from "@/pages/admin/AllParcels";
// import AllUsers from "@/pages/admin/AllUsers";
import type { ISidebarItems } from "@/types";
import { lazy } from "react";

const AllUsers = lazy( ()=> import('@/pages/admin/AllUsers')) ;
const AllParcels = lazy( ()=> import('@/pages/admin/AllParcels')) ;

export const AdminSidebarItems : ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "All Users",
        url: "/admin/all-users",
        component : AllUsers,
      },
      {
        title: "All Parcels",
        url: "/admin/all-parcels",
        component : AllParcels,
      },
    ],
  },
//   {
//     title: "Tour Management",
//     items: [
//       {
//         title: "Add Tour",
//         url: "/admin/add-tour",
//         component : AddTour
//       },
//     ],
//   },
];
