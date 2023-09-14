import { createClient } from "$lib/prismicio"

export async function load({ fetch, request }) {
    const client = createClient({ fetch, request })

    const document = await client.getByUID("squadpage", "squadpage")

    return document.data
}