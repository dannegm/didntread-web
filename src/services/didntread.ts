import { AbstractRequestModel, type AbstractModel, type FingerprintModel } from '@/types/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useFingerprint } from '@/providers/fingerprint-provider';

export const didntreadApi = createApi({
    reducerPath: 'didntreadApi',
    tagTypes: ['tokens', 'abstracts'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://endpoints.hckr.mx/didntread',
    }),
    endpoints: builder => ({
        getTokens: builder.query<FingerprintModel, { headers?: HeadersInit }>({
            query: options => ({
                url: '/tokens',
                headers: options?.headers,
            }),
            providesTags: ['tokens'],
        }),

        getAbstracts: builder.query<AbstractModel[], { headers?: HeadersInit }>({
            query: options => ({
                url: '/abstracts',
                headers: options?.headers,
            }),
            providesTags: ['abstracts'],
        }),

        scrapAbstract: builder.mutation<
            AbstractModel,
            { body: AbstractRequestModel; headers?: HeadersInit }
        >({
            query: ({ body, headers }) => ({
                url: '/scrapper',
                method: 'POST',
                body,
                headers,
            }),
            invalidatesTags: ['tokens', 'abstracts'],
        }),
    }),
});

const { useGetTokensQuery, useGetAbstractsQuery, useScrapAbstractMutation } = didntreadApi;

export const useGetTokens = () => {
    const { token } = useFingerprint();
    return useGetTokensQuery({
        headers: {
            'x-dnn-token': token,
        } as HeadersInit,
    });
};

export const useGetAbstracts = () => {
    const { token } = useFingerprint();
    return useGetAbstractsQuery({
        headers: {
            'x-dnn-token': token,
        } as HeadersInit,
    });
};

export const useScrapAbstract = () => {
    const { token } = useFingerprint();
    const [scrap, { isLoading, error, data }] = useScrapAbstractMutation();

    const executor = (body: AbstractRequestModel) => {
        scrap({
            body,
            headers: {
                'Content-Type': 'application/json',
                'x-dnn-token': token,
            } as HeadersInit,
        });
    };

    return { executor, isLoading, error, data };
};
