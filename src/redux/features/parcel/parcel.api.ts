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


    cancelParcel: builder.mutation({
      query: ({ id }) => ({
        url: `/parcel/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"],
    }),




  }),
});

export const { useCreateParcelMutation,
   useGetMyParcelsQuery,
  useCancelParcelMutation,
  } = parcelApi;
