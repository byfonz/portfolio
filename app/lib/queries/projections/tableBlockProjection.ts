import { tableFragment } from "../fragments/tableFragment";

export const tableBlockProjection = `
_type == 'tableBlock' => {
    ${tableFragment}
}
`