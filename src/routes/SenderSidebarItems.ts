
import CreatedParcels from "@/pages/sender/CreatedParcels";
import type { ISidebarItems } from "@/types";

export const SenderSidebarItems : ISidebarItems[] = [
  {
    title: "Parcels",
    items: [
      {
        title: "Created parcels",
        url: "/sender/created-parcels",
        component : CreatedParcels,
      },
    ],
  },

];
