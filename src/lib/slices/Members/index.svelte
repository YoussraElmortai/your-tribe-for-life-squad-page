<script>
	import * as prismic from '@prismicio/client';
	export let slice;
</script>

<body>
	<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
		{#each slice.items as item}
			<!-- {console.log(item)} -->
			<section class="wrapper">
				<section class="member-card">
					<a href="/Member/{item.name[0].text.split(' ')[0].toLowerCase()}">
						<img src={item.img.url} loading="lazy" alt={item.img.alt} width="50em" height="50em" />
					</a>
				</section>
				<h3>{@html prismic.asHTML(item.name)}</h3>
			</section>
		{/each}
	</section>
</body>

<style>
	/* body:has(.member-card:hover) {
		opacity: 0.5;
	} */

	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		margin-top: 5rem;
		overflow: visible;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		margin-top: -5rem;
	}

	.member-card {
		background-color: #a675f5;
		display: flex;
		align-items: center;
		width: 9rem;
		height: 9rem;
		border-radius: 100%;
		overflow: hidden;
	}

	.member-card:hover {
		scale: 200%;
		opacity: 1;
	}

	.member-card a {
		text-decoration: none;
		font-size: 15px;
	}

	.member-card img {
		width: 9rem;
		height: auto;
		margin-top: -1rem;
	}

	h3 {
		color: aliceblue;
		font-size: 18px;
		margin-top: -2rem;
	}
</style>
