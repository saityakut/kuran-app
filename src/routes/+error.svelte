<script>
    import { page } from '$app/stores';
    console.log('page :: ' , $page.status);
</script>


    <div class="error">
        <h1>Hata!</h1>
        <span>{$page.status == 404 ? 'Aradığınız sayfa bulunamadı' : 'Bir Hata Oluştu'}</span>
        <h2>{$page.status}</h2>
    </div>




<style>
    .error {
        margin-top: 10rem;
        text-align: center;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
    h2{
        font-size: 85px;
    }
</style>