<script>
	export let slice;
</script>

<section  data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as squad}
			<a href="/Squadpage/{squad.uid}">
				<span>{slice.primary.squadtitle[0].text}</span>
			</a>
	{/each}
</section>

<style>
	
	section {
		width: 300px;
		height: 00px;
		border-radius: 50%;
		background: linear-gradient(#a675f5 0%, #8d56e5 10%, #7f3ceb 50%, #7023ec  100%);
		text-decoration: none;
		text-align: center;
		transition: transform 0.5s ease-in-out; 
		position: relative; 
	}
	
	a {
		position: absolute;
		font-size: 5em;
		color: var(--text-color);
		top: 50%;
		left: 50%; 
		transform: translate(-50%, -50%);  
    }
	
	section:hover {
        transform: scale(1.3); /* Zoom in on the active circle */
    }

	section:last-child {
		margin-bottom: 10rem;

	}
/* 
   section {
  	animation: move 5s infinite alternate;
  	transition: 0.1s cubic-bezier(0.07, 0.8, 0.16, 1);
  }


@keyframes move {
  from {
    transform: translate(190px, -40px) rotate(-60deg);
  }

  to {
    transform: translate(-190px, 100px) rotate(-10deg);
  }
} */

@media screen and (min-width: 48em) {
        section {
        width: 550px;
		height: 550px;
        }
	} 
</style>
