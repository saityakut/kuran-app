<script lang="ts">
	
	import { fade } from 'svelte/transition';
    import { onMount, onDestroy} from 'svelte';
	import SurahVersesCard from './SurahVersesCard.svelte';
    export let data;
    console.log(data.verses);
    $:show = false;

    onMount(()=> {
        show=true;
    });

    onDestroy(()=> {
        show=false;
    });
</script>


<section>
    
    {#if show}
        {#if data.verses}
            <div class="grid-container" >
                {#each data.verses as verse,i (verse.id)}
                <!-- transition:fade={{delay: i * 150}} -->
                <div >
                    <SurahVersesCard verses={verse}/>
                </div>
                {/each}
            </div>
        {/if}
    {/if}
</section>

<style>
    
    .grid-container {
        display: grid;
        grid-template-columns: auto;
        margin: 0 30px;
    }
</style>