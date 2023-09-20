<script>
    export let title;
    export let text
</script>

<header>
<h1>{title}</h1>
<p>{text}</p>
</header>

<style>
    header {
        top: 0;
        width: 100%;
        height: 10rem;
        background-color: hotpink;
        margin-bottom: 3rem;
        padding: 2rem;
    }

    header h1 {
    font-size: var(--text-size-title);
    text-align: center; 
    color: var(--text-color);
    }

    header p {
    color: var(--text-color);
    font-size: var(--text-size-paragraph);
    left: 2em;
    max-width: 10em;
    }

</style>