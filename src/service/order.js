import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ORDERS_URL = import.meta.env.VITE_ORDERS_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const PAYPAL_URL = import.meta.env.VITE_PAYPAL_URL;

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: order,
      }),
    }),
    getOrderDetails: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
      }),
    }),
    payOrder: builder.mutation({
      query: ({ orderId, statusDelivery }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: "PUT",
        body: statusDelivery,
      }),
    }),

    getPaypalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
    }),

    getMyOrders: builder.query({
      query: (userId) => ({
        url: `${ORDERS_URL}/mine?userId=${userId}`,
      }),

      keepUnusedDataFor: 5,
    }),

    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL,
      }),
    }),

    deliverOrder: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/deliver`,
        method: "PUT",
      }),
    }),

    getTotalOrders: builder.query({
      query: () => `${ORDERS_URL}/total-orders`,
    }),

    getTotalSales: builder.query({
      query: () => `${ORDERS_URL}/total-sales`,
    }),

    getTotalSalesByMonth: builder.query({
      query: () => `${ORDERS_URL}/total-sales-by-month`,
    }),
    updateProductStockInOrder: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: `${ORDERS_URL}/update-stock`,
        method: "POST",
        body: { productId, quantity },
      }),
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
        method: "DELETE",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useDeliverOrderMutation,
  useGetMyOrdersQuery,
  useGetOrderDetailsQuery,
  useGetOrdersQuery,
  useGetPaypalClientIdQuery,
  useGetTotalOrdersQuery,
  useGetTotalSalesByDateQuery,
  useGetTotalSalesQuery,
  usePayOrderMutation,
  useDeleteOrderMutation,
  useGetTotalSalesByMonthQuery,
} = orderApi;
