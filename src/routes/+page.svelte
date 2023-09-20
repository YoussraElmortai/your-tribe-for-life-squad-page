<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    import Header from '../lib/header.svelte'
	export let data;
</script>

 <Header title={data.title} paragraph={data.introtext}/>

<section>
    <SliceZone slices={data.slices} {components} />
    <a href="/SquadPage/squada"><span>A</span></a>
    <a href="/SquadPage/squadb"><span>B</span></a> 
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-direction: column;  
    }
    
   section a {
        position: relative; 
        background-color:var(--primary-color);
        width: 300px;
        height: 300px;
        border-radius: 50%;
        text-decoration: none;
        text-align: center;
    }

  section span {
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);  
    }

    @media screen and (min-width: 48em) {
        /* Apply the flex-direction: row for desktop screens */
        section {
            flex-direction: row;  
        }
    }
</style>