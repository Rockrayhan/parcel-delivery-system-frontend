import { baseApi } from "@/redux/baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createParcel: builder.mutation({
      query: (createParcel) => ({
        url: "/parcel/create",
        method: "POST",
        data: createParcel,
      }),
      invalidatesTags: ["PARCEL"],
    }),

    getMyParcels: builder.query({
      query: () => ({
        url: "/parcel/my-parcels",
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),

    getIncomingParcels: builder.query({
      query: () => ({
        url: "/parcel/incoming",
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),

    getDeliveredParcels: builder.query({
      query: (status: string = "Delivered") => ({
        url: `/parcel/my-parcels?status=${status}`,
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),

    cancelParcel: builder.mutation({
      query: ({ id }) => ({
        url: `/parcel/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"],
    }),

    confirmParcel: builder.mutation({
      query: ({ id }) => ({
        url: `/parcel/confirm/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"],
    }),
  }),
});

export const {
  useCreateParcelMutation,
  useGetMyParcelsQuery,
  useCancelParcelMutation,
  useGetIncomingParcelsQuery,
  useConfirmParcelMutation,
  useGetDeliveredParcelsQuery,
} = parcelApi;
