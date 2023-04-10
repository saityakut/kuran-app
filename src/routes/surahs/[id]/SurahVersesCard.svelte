<script lang="ts">
	import { goto } from "$app/navigation";

    export let verses = {
        id:0,
        verse:'',
        transcription:'',
        translation: {
            text:'',
        },
    };
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card">
    <div class="a">
        <span>{verses.id}-</span>
        <div class="b">
            <h4>{verses.verse}</h4>
            <div class="container">
                <div>Okunuş: {verses.transcription}</div>
                <div>Meal: {verses.translation.text}</div>
            </div>
        </div>
    </div>
</div>

<style>
    h4 {
        color: #12192C;
        font-size: 40px;
    }
    span {
        color: #12192C;
        font-size: 20px;
    }
    .a {
        display: flex;
        justify-content:flex-start;
        align-items: center;
    }
    .b{
        margin-left: auto;
        margin-right: auto;
    }
    .card {
        background-color: var(--primary);
        padding: 4px;
        margin: 15px 5px;
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border:2px  solid #12192C;
        border-radius: 10px;
        cursor: pointer;
    }

    .card:hover {
        transform: scale(1.1);
    }

    .container {
        padding: 4px 16px;
        color: #12192C;
    }
</style>