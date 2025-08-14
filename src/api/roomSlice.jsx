import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mockRooms } from './mock/rooms';

// 真实后端时可换成环境变量
const baseUrl = import.meta.env.VITE_API_BASE || '';

export const roomApi = createApi({
    reducerPath: 'roomApi',
    baseQuery: fetchBaseQuery(),
    tagTypes: ['Room'],
    endpoints: builder => ({
    /* 列表 */
    getRooms: builder.query({
        queryFn: async () => {
            await new Promise(r => setTimeout(r, 1000));
            return {data: mockRooms};
            /* 接入真后端 */
            // const res = await fetch('/api/rooms');
            // const data = await res.json();
            // return { data };
            //or
            //fetchBaseQuery({ baseUrl: '/api' })
        }
    }),
    /* 单条 */
    getRoom: builder.query({
        query: id => `/rooms/${id}`,
        transformResponse: (_, __, id) =>
            mockRooms.find(r => r.id === Number(id)),
    }),
  }),
});

export const { useGetRoomsQuery, useGetRoomQuery } = roomApi;