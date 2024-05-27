/* create a basic test suite */
import data from "../example_api_response.json";
import { GenerationTable } from "../src/components/Generation/GenerationTable";
import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'


/* MOCK DATA FOR REACT QUERY */

describe("Render table", function () {
    render(<GenerationTable generationmix={data.data.generationmix} />);

    it("Should render withouth crash", function () {
        expect(screen.getByTestId('generationTable')).toBeInTheDocument();

        expect(screen.getByTestId('generationTable')).toContainHTML('biomass');
    })

});
