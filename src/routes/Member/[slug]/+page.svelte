<script>
    import * as prismic from "@prismicio/client";
    import { SliceZone } from "@prismicio/svelte";
    import { components } from "$lib/slices";

    export let data;
    console.log(data)
</script>



<body>
    <!-- terug naar squad of tribe? -->
    <a id="link-back" href="/">terug</a>

    <!-- member data from Prismic -->
    <section id="member">
        <h1>{data.membername}</h1>
        <div class="img-container">
            <img id="member-profile-photo" width="400rem" alt={data.memberimg.alt} src={data.memberimg.url}>
        </div>
        <p>Introtekst member</p>
        <!-- <p>{data.memberage}</p> -->
        <p>Hobbies</p>
        <a class="social-link" href="{data.memberlink}">LinkedIn</a>
        <a class="social-link" href="#">Github</a>
    </section>

</body>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&display=swap');

    * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inconsolata', monospace;
    } 

    :root {

    /* custom properties : colors */ 
    /* FDND thema */
    --color-primary: #050542;
    --color-secondary: #A675F5;
    --color-tertiary: #66E5BF;

    --color-page-title: #FFFC86;
    --color-member-title: #FCFBCE;

    --button-highlight: #CEF2E7;
    --button-text: #050542;

    --text-color: #FFFFFF;  /* off white beter dan gewoon plain white? */
    }

    body {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: center;
        justify-content: center;
        background-color: var(--color-primary);
    }

    #link-back {
		display: flex;
        justify-content: center;
		width: 5rem;
		height: 34px;
        background-color: var(--color-tertiary);
        color: var(--button-text);
        border-radius: 4rem;
        margin-top: 3rem;
	}


    h1 {
        color: var(--color-page-title);
    }
    
    p {
        color: var(--text-color);
    }


    .img-container {
        height: 400px;
        width: 400px;
        border-radius: 50%;
        overflow: hidden;
        border: 10px dotted var(--color-secondary);
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }

    #member {
        border-radius: 2rem;
        /* padding: 3rem; */
        margin-top:5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: space-between; */
    }

    .social-link {
        box-shadow: inset 0 0 0 0 var(--color-secondary);
        color: var(--color-secondary);
        margin: 0 -.25rem;
        padding: 0 .25rem;
        transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    }

    .social-link:hover {
    box-shadow: inset 100px 0 0 0 var(--color-secondary);
    color: var(--text-color);
    }

</style>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>  