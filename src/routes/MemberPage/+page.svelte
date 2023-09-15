<script>
    import * as prismic from "@prismicio/client";
    import { SliceZone } from "@prismicio/svelte";
    import { components } from "$lib/slices";
    export let data;
    console.log(data)
</script>

<!-- <h1>{data.title[0].text}</h1> 
<SliceZone slices={data.slices} {components} /> -->

<body>
<div id="member-card">
<h1>Member name</h1>
<img id="member-profile-photo" width="200rem" alt="member profile photo" src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80">
<p>member info text blabla student blabla FDND blabla bladiebla</p>
<a href="#">social media</a>
<a href="#">visitekaartje</a>
</div>
</body>

<style>
    body {
        display: flex;
        flex-direction: center;
        justify-content: center;
        background-color: rgb(11, 11, 88);
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

    #member-profile-photo {

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
