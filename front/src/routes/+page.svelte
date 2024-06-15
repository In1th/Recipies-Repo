<script>
    import { addSuccessToast } from '$lib/stores/toasterStore';
  
    const onClick = () => {
        addSuccessToast('Test', 'This is a test toast')
    }
</script>

<section class="flex flex-col text-center">
    <h1>Welcome to the Recipes.</h1>
    <p>This is not Ania gotuje I promise</p>
    <button on:mousedown={onClick}>Test</button>
</section>