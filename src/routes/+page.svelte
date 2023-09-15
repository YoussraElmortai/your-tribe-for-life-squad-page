<script>
	import * as prismic from '@prismicio/client';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data;
</script>

<pre>
    {JSON.stringify(data.slices, null, 2)}
</pre>
<SliceZone slices={data.slices} {components} />
