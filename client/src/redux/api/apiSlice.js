import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({ baseUrl : "https://fiverr-clone-3ogs.onrender.com/api/v1", credentials : "include" }),
    tagTypes : [],
    endpoints : (builder) => ({

        register : builder.mutation({
            query : (payload) => ({
                url : "/auth/register",
                method : "POST",
                body : payload
            })
        }),

        login : builder.mutation({
            query : (payload) => ({
                url : "/auth/login",
                method : "POST",
                body : payload
            })
        }),

        logout : builder.mutation({
            query : () => ({
                url : "/auth/logout",
                method : "POST"
            })
        }),

        gigsSearch : builder.query({
            query : ({minPrice, maxPrice, search}) => ({
                url : `/gigs${search}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
                method : "GET"
            })
        }),

        getSingleGig : builder.query({
            query : (id) => ({
                url : `/gigs/${id}`,
                method : "GET"
            })
        }),

        addNewGig : builder.mutation({
            query : (payload) => ({
                url : `/gigs/create-new-gig`,
                method : "POST",
                body : payload
            })
        }),

        getSingleUser : builder.query({
            query : (id) => ({
                url : `/user/account/${id}`,
                method : "GET"
            })
        }),

        getreviews : builder.query({
            query : (gigId) => ({
                url : `/reviews/${gigId}`,
                method : "GET"
            })
        }),

        getOrders : builder.query({
            query : () => ({
                url : `/orders`,
                method : "GET"
            })
        }),

        getConversations : builder.query({
            query : () => ({
                url : `/conversations`,
                method : "GET"
            })
        }),

        createConversation : builder.mutation({
            query : (payload) => ({
                url : `/conversations`,
                method : "POST",
                body : payload
            })
        }),

        updateConversation : builder.mutation({
            query : (id) => ({
                url : `/conversations/${id}`,
                method : "PUT"
            })
        }),

        createMessage : builder.mutation({
            query : (payload) => ({
                url : `/messages`,
                method : "POST",
                body : payload
            })
        }),

        getMessages : builder.query({
            query : (id) => ({
                url : `/messages/${id}`,
                method : "GET"
            })
        }),

    })
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useGigsSearchQuery, useGetSingleUserQuery, useGetSingleGigQuery, useGetreviewsQuery, useGetOrdersQuery, useGetConversationsQuery, useCreateConversationMutation, useUpdateConversationMutation, useCreateMessageMutation, useGetMessagesQuery, useGigsSearchByTitleQuery, useAddNewGigMutation } = apiSlice;
