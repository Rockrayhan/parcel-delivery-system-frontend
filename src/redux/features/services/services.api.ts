import { baseApi } from "@/redux/baseApi";

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // Create Service
    createService: builder.mutation({
      query: (serviceData) => ({
        url: "/services",
        method: "POST",
        data: serviceData,
      }),
      invalidatesTags: ["SERVICE"],
    }),

    //  Get All Services
    getAllServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
      providesTags: ["SERVICE"],
    }),

    // Get Service By ID
    getServiceById: builder.query({
      query: (id: string) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: ["SERVICE"],
    }),

    //  Update Service
    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["SERVICE"],
    }),

    //  Delete Service
    deleteService: builder.mutation({
      query: (id: string) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SERVICE"],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetAllServicesQuery,
  useGetServiceByIdQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = servicesApi;
