<script>
    import * as prismic from "@prismicio/client";
    import { SliceZone } from "@prismicio/svelte";
    import { components } from "$lib/slices";

    export let data;
    console.log(data)
</script>



<body>
    <div id="member-card">
        <h1>{data.membername}</h1>
        <img id="member-profile-photo" width="400rem" alt={data.memberimg.alt} src={data.memberimg.url}>
        <!-- <p></p>
        <a href="#">social media</a>
        <a href="#">visitekaartje</a> -->
    </div>
</body>

<style>
    body {
        display: flex;
        flex-direction: center;
        justify-content: center;
        /* background-color: rgb(11, 11, 88); */
    }

    h1, p {
        color: rgb(11, 11, 88);
    }

    #member-card {
        border: 10px dotted rgb(174, 75, 189);
        border-radius: 2rem;
        background-color: rgb(128, 217, 187);
        padding: 3rem;
        margin-top:5rem;
        display: flex;
        flex-direction: column;
    }

    a {
        box-shadow: inset 0 0 0 0 rgb(174, 75, 189);
        color: rgb(174, 75, 189);
        margin: 0 -.25rem;
        padding: 0 .25rem;
        transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    }

    a:hover {
    box-shadow: inset 100px 0 0 0 rgb(174, 75, 189);
    color: white;
    }

</style>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>  