export interface GenerationIem {
    fuel: string,
    perc: number
}

export interface Generationmix {
    generationmix: GenerationIem[],
    from: string,
    to: string
}