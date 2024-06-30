<script lang="ts">
    export let imagePath: string;
    export let placeholder: string;
    export let alt: string;
    export let styles = '';

    $: imgUrl = `./blob/image/${imagePath.split('/').pop()}`
</script>

<img class={styles} src={imgUrl} placeholder={placeholder} alt={alt}/>

