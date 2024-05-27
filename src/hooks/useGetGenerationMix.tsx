import { useQuery } from "react-query";
import { fetchGenerationMix } from "../queries/fetchGenerationMix";
import { Generationmix } from "../../types/types";

const key = 'geneationMix';

export const useGetGenerationMix = (): { data: { data: Generationmix }, isLoading: boolean, isError: boolean } => {
    return useQuery([key], fetchGenerationMix)
}