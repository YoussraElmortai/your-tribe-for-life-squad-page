import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });
	const page = await client.getByUID('tribepage', 'tribepage');
	console.log(page);
	return page.data;
}
