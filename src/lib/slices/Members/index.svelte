<script>
	/** @type {import("@prismicio/client").Content.MembersSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	
	{#each slice.items as item }
	  <section>
		<a href="{item.memberpage}">
			<h3>{item.name[0].text}</h3>
			<img src="{item.img.url}" alt="{item.img.alt}" width="50em" height="50em">
		</a>
	  </section>
	{/each}
</section>
