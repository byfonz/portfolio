import { imageFragment } from "../fragments/imageFragment";

export const imageBlockProjection = `
_type == 'imageBlock' => {
    caption,
    image{
        ${imageFragment}
    }
}
`