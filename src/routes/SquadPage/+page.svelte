<script>
    import * as prismic from "@prismicio/client";
    import { SliceZone } from "@prismicio/svelte";
    import { components } from "$lib/slices";
    export let data;
    console.log(data)
  </script>

<h1>{data.title[0].text}</h1> 
<SliceZone slices={data.slices} {components} />
 
