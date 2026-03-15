import { groq } from "next-sanity";
import { sectionProjection } from "./projections/sectionProjection";

export const postQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    sections[]{
        ${sectionProjection}
    }
}
`