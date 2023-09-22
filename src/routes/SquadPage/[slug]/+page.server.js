import { createClient } from '$lib/prismicio';

export async function load({ fetch, request, params }) {
	const client = createClient({ fetch, request });

	const document = await client.getByUID('squadpage', params.slug);

	console.log(document);
	return document.data;
}
