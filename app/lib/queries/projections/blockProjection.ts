import { imageBlockProjection } from "./imageBlockProjection";
import { tableBlockProjection } from "./tableBlockProjection";
import { textBlockProjection } from "./textBlockProjection";

export const blockProjection = `
    _key,
    _type,
    ${textBlockProjection},
    ${imageBlockProjection},
    ${tableBlockProjection},
`