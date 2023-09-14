<script>
	/** @type {import("@prismicio/client").Content.MembersSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item}
		<section class="member-card">
			<a href={item.memberpage}>
				<h3>{item.name[0].text}</h3>
				<img src={item.img.url} alt={item.img.alt} width="50em" height="50em" />
			</a>
		</section>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.member-card {
		background-color: #a675f5;
		display: flex;
		width: 10rem;
		height: auto;
		border-radius: 100%;
	}

	.member-card img {
		width: auto;
	}
</style>
