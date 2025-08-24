import IncomingParcels from "@/pages/receiver/IncomingParcels";
import type { ISidebarItems } from "@/types";

export const ReceiverSidebarItems : ISidebarItems[] = [
  {
    title: "Parcels",
    items: [
      {
        title: "Incoming parcels",
        url: "/receiver/incoming-parcels",
        component : IncomingParcels,
      },
    ],
  },

];
