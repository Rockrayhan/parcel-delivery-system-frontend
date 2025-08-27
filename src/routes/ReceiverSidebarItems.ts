// import IncomingParcels from "@/pages/receiver/IncomingParcels";
// import ViewDeliveryHistory from "@/pages/receiver/ViewDeliveryHistory";
import type { ISidebarItems } from "@/types";
import { lazy } from "react";


const IncomingParcels = lazy( ()=> import('@/pages/receiver/IncomingParcels')) ;
const ViewDeliveryHistory = lazy( ()=> import('@/pages/receiver/ViewDeliveryHistory')) ;

export const ReceiverSidebarItems : ISidebarItems[] = [
  {
    title: "Receiver Dashboard Menu",
    items: [
      {
        title: "Incoming parcels",
        url: "/receiver/incoming-parcels",
        component : IncomingParcels,
      },
      {
        title: "Received parcels",
        url: "/receiver/delivered-parcels",
        component : ViewDeliveryHistory,
      },
    ],
  },

];
