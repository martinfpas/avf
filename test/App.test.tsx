
import * as ReactQuery from 'react-query';
import { render, screen } from "@testing-library/react";
import React from "react";

import data from "../example_api_response.json";
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from '../src/app';

import '@testing-library/jest-dom'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 1,
        },
    },
});

jest
    .spyOn(ReactQuery, 'useQuery')
    .mockImplementation(
        jest
            .fn()
            .mockReturnValue({ data: { ...data }, isLoading: false, isSuccess: true })
    )

describe('main app', function () {
    render(<QueryClientProvider client={queryClient}><App /></QueryClientProvider>);

    it('Should render without crashing', function () {
        expect(screen.getByTestId("main-layout")).toBeInTheDocument();
        //expect(screen.getByTestId("error-loading-data")).not.toBeInTheDocument();
    })

})