<script>
    export let title;
    export let paragraph;
</script>

<header>
<h1>{title}</h1>
<p>{paragraph}</p>
</header>

<style>
    header {
        top: 0;
        width: 100%;
        height: 14em;
    }

    header h1 {
    padding: 1rem;
    font-size: var(--text-size-title);
    text-align: center; 
    margin: 0;
    color: var(--text-color);
    }

    header p {
    padding: 0.5rem;
    margin: 0;
    color: var(--text-color);
    font-size: var(--text-size-paragraph);
    left: 2em;
    max-width: 30rem;
   
    }

</style>