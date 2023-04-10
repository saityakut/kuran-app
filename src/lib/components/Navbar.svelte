<script lang="ts">
    let isMenuOpen = false;
    let current = 0;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<div class="navbar">
    <a href="/" class="logo">Kur'an'ı Kerim</a>
    <nav class:open = {isMenuOpen}>
        <ul>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => (isMenuOpen = false)}>
                <a href="/" class:current={current === 0} on:click={() => (current = 0)}>Anasayfa</a>
            </li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => (isMenuOpen = false)}>
                <a href="/translation" class:current={current === 1} on:click={() => (current = 1)}>Meal</a>
            </li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => (isMenuOpen = false)}>
                <a href="/arabic" class:current={current === 2} on:click={() => (current = 2)}>Arapça-Meal</a>
            </li>
        </ul>
    </nav>
    <button on:click={toggleMenu} class="burger" class:open={isMenuOpen}>
        <div class="bar-1"></div>
        <div class="bar-2"></div>
        <div class="bar-3"></div>
    </button>
</div>


<style>
    .navbar {
        background-color: var(--dark);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 4rem;
    }

    .logo {
        margin-left: 6vw;
    }

    @media only screen and (max-width: 767px) {
        nav {
            opacity: 0;
            position: absolute;
            top: 100%;
            left: 100%;
            background-color: var(--dark);
            width: 100%;
            transition: all 300ms ease-in-out;
        }

        nav.open {
            opacity: 1;
            left: 0;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5vh;
        margin-top: 2vh;
        margin-bottom: 4vh;
        list-style: none;
        font-size: 1.1rem;
    }

    /* navlink animations */

    li > a {
        display: inline-block;
        transition: all 200ms ease-in-out;
    }

    li > a:hover {
        transform: scale(1.1);
    }

    li > a:active {
        transform: scale(0.9);
    }

    .current {
        position: relative;
    }

    .current::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--secondary);
    }

    .burger {
        height: 28px;
        aspect-ratio: 1;
        border: 2px solid var(--light);
        background-color: transparent;
        border-radius: 5px;
        margin-right: 6vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .burger > div {
        height: 2px;
        width: 14px;
        background-color: var(--light);
        position: absolute;
        transition: all 330ms ease-in-out;
    }

    .bar-1 {
        transform: translateY(-5px);
    }
    .bar-3 {
        transform: translateY(5px);
    }

    /* menu icon animations*/
    .burger.open .bar-1 {
        transform: rotateZ(45deg);
    }

    .burger.open .bar-2 {
        opacity: 0;
    }

    .burger.open .bar-3 {
        transform: rotateZ(-45deg);
    }

    @media only screen and (min-width: 768px) {
        .logo {
            margin-left: 3vw;
        }

        .burger {
            display: none;
        }

        nav {
            display: block;
            position: relative;
        }

        ul {
            margin: 0 2vw;
            flex-direction: row;
            gap: 2vw;
        }
    }
</style>