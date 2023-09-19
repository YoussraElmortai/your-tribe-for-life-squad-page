<script>
	import * as prismic from '@prismicio/client';
	export let slice;
</script>

<section class="container-member-card" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item}
		<section class="member-card">
			<a href="/member${item.params}">
				<h3>{@html prismic.asHTML(item.name)}</h3>
				<img src={item.img.url} alt={item.img.alt} width="50em" height="50em" />
			</a>
			<!-- <pre>
			{JSON.stringify(item, null, 2)}
			  </pre> -->
		</section>
	{/each}
</section>



<style>
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
	
	.member-card {
		background-color: #a675f5;
		display: flex;
		align-items: center;
		width: 9rem;
		height: 9rem;
		border-radius: 100%;
		margin-top: 1rem;
	}

	.member-card a {
		text-decoration: none;
		color: aliceblue;
		font-size: 15px;
	}

	.member-card img {
		width: auto;
		margin-left: 2.3rem;
	}

</style>
