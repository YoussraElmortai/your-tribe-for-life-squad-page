<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
	export let data;
</script>

<header>
<h1>{data.title}</h1>
<p>{data.introtext}</p>
</header>

<main>

    <a href="/SquadPage/squada"><span>A</span></a>
    <SliceZone slices={data.slices} {components} />
  
    <a href="/SquadPage/squadb"><span>B</span></a> 
    <SliceZone slices={data.slices} {components} />

</main>

<style>
    header h1 {
    font-size: var(--text-size-title);
    text-align: center; 
    color: var(--text-color);
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-direction: column;  
    }
    
   main a {
        position: relative; 
        background-color:var(--primary-color);
        width: 300px;
        height: 300px;
        border-radius: 50%;
        text-decoration: none;
        text-align: center;
    }

    main span {
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);  
    }

   
    @media screen and (min-width: 48em) {
        /* Apply the flex-direction: row for desktop screens */
        main {
            flex-direction: row;  
        }
    }
</style>