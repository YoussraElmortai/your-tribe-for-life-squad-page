<script>
	import * as prismic from '@prismicio/client';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	export let data;
	let yes = false;

	console.log(data)
</script>




<label>
	<input type="checkbox" bind:checked={yes} />
	<span />
</label>

<SliceZone slices={data.slices} {components} />

<main>
	<SliceZone slices={data.slices} {components} />
</main>


{#if yes}
	<style>
		span:before {
			transform: translateX(26px);
			background-color: red;
		}
	</style>
{:else}
	<style>
		h3 {
			display: none;
		}
		img {
			display: none;
		}
		a {
			width: 8rem;
			height: 8rem;
		}
	</style>
{/if}

<style>
	header {
		margin-left: 2rem;
		margin-bottom: 3rem;
	}

	main {
		margin-left: 2.3rem;
	}
	label {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}
	input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	span {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}
	span:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}
	input:checked + span {
		background-color: #cef2e7;
	}
	input:checked + span:before {
		background-color: #66e5bf;
	}
</style>
