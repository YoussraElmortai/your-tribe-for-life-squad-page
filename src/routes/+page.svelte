<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    import Header from '../lib/header.svelte'
	export let data;
</script>

 <Header title={data.title} paragraph={data.introtext[0].text}/>

<article>
    <SliceZone slices={data.slices} {components} />
</article>

<style>
article {
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    gap: 1rem;
    margin-top: 14rem;
}

   @media screen and (min-width: 48em) {
		/* Apply the flex-direction: row for desktop screens */
        article {
			flex-direction: row;  
            margin: unset
		}
	} 
</style>



  
 