<script>
	export let slice;
</script>

<section  data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<a href="/SquadPage/squad{slice.primary.squadtitle[0].text.toLowerCase()}">
		<span>{slice.primary.squadtitle[0].text}</span>
	</a>
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

@media screen and (min-width: 48em) {
        section {
        width: 550px;
		height: 550px;
        }
	} 
</style>
