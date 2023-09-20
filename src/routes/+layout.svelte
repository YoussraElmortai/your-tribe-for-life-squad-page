
<main>
    <slot />
</main>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&display=swap');
        :global(body){
            margin: 0;
            overflow-x: hidden;
            box-sizing: border-box;
            font-family: 'Inconsolata', monospace;
            background-color: #050542;
        }
        
        :root {
        --primary-color: #a675f5;
        --secondary-color: #fffc86;
        --third-color: #66e5bf;
        --text-color: #fffc86;
        --text-size-title: 6rem;
        --text-size-paragraph: 2rem;
    }
    </style>