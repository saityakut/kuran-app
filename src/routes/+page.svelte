<script lang="ts">
	
	import { fade } from 'svelte/transition';
    import { onMount, onDestroy} from 'svelte';
	import SurahNameCard from './SurahNameCard.svelte';
    export let data;
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
        {#if data.surahs}
            <div class="grid-container" >
                {#each data.surahs as sura,i (sura.id)}
                <!-- transition:fade={{delay: i * 150}} -->
                <div >
                    <SurahNameCard sura={sura}/>
                </div>
                {/each}
            </div>
        {/if}
    {/if}
</section>

<style>
    @media screen and  (max-width: 800px){
        .grid-container {
            grid-template-columns: auto auto!important;;
        }
    }
    @media screen and  (max-width: 600px){
        .grid-container {
            grid-template-columns: auto!important;;
        }
    }
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
    }
</style>