<script>
	import * as prismic from '@prismicio/client';
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item}
		<!-- {console.log(item)} -->
		<section class="member-card">
			<a href="/Member/{item.name[0].text.split(' ')[0].toLowerCase()}">
				<h3>{@html prismic.asHTML(item.name)}</h3>
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
		gap: 2rem;
	}

	.member-card {
		background-color: #a675f5;
		display: flex;
		align-items: center;
		width: 9rem;
		height: 9rem;
		border-radius: 100%;
		margin-top: 1rem;
		overflow: hidden;
	}

	.member-card a {
		text-decoration: none;
		font-size: 15px;
	}

	.member-card img {
		width: 9rem;
		height: auto;
		margin-top: -4.5rem;
	}
</style>
