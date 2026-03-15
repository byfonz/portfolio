
import { postQuery } from "@/lib/queries/post";
import { client } from "@/lib/sanity-client";
import { PostType } from "@/types/proposal";

export async function getPost(
    slug:string
): Promise<PostType | null> {
    if (!slug) {
        return null
    };

    const proposal = await client.fetch<PostType | null>(
        postQuery,
        { slug }
    );

    return proposal;
};