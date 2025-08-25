
import CreatedParcels from "@/pages/sender/CreatedParcels";
import type { ISidebarItems } from "@/types";

export const SenderSidebarItems : ISidebarItems[] = [
  {
    title: "Sender Dashboard Menu",
    items: [
      {
        title: "All Created parcels",
        url: "/sender/created-parcels",
        component : CreatedParcels,
      },
    ],
  },

];
