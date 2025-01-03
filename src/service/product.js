import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const PRODUCT_URL = import.meta.env.VITE_PRODUCT_URL;
const UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword }) => ({
        url: `${PRODUCT_URL}`,
        params: { keyword },
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Products"],
    }),
    getProductsByKey: builder.query({
      query: ({ brand }) => ({
        url: `${PRODUCT_URL}`,
        body: { brand }, // cần sửa lại là param
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Products"],
    }),

    getProductsByBrand: builder.mutation({
      query: (productData) => ({
        url: `${PRODUCT_URL}/brand`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),

    getProductById: builder.query({
      query: (productId) => `${PRODUCT_URL}/${productId}`,
      providesTags: (result, error, productId) => [
        { type: "Product", id: productId },
      ],
    }),

    getAllProducts: builder.query({
      query: () => `${PRODUCT_URL}/allProducts`,
    }),

    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    createProduct: builder.mutation({
      query: (productData) => ({
        url: `${PRODUCT_URL}`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      query: ({ productId, productData }) => ({
        url: `${PRODUCT_URL}/${productId}`,
        method: "PUT",
        body: productData,
      }),
    }),

    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (productIds) => ({
        url: `${PRODUCT_URL}/delete`,
        method: "DELETE",
        body: {
          ids: productIds,
        },
      }),
      providesTags: ["Product"],
    }),

    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.productId}/reviews`,
        method: "POST",
        body: data,
      }),
    }),

    getTopProducts: builder.query({
      query: ({ typeProduct, limitProduct }) =>
        `${PRODUCT_URL}/top?typeProduct=${typeProduct}&limitProduct=${limitProduct}`,
      keepUnusedDataFor: 5,
    }),

    getNewProducts: builder.query({
      query: () => `${PRODUCT_URL}/new`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByKeyQuery,
  useGetProductByIdQuery,
  useGetAllProductsQuery,
  useGetProductsByBrandMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
  useUploadProductImageMutation,
  useUpdateProductMutation,
} = productApi;
