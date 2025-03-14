<script>
    import { onMount } from 'svelte';
    import Button from '$lib/components/Button.svelte';

    onMount(() => {
        console.log("Student Quiz Home Page Loaded");
    });

</script>


<!-- Gallery Container -->
<div class="gallery">
    <Button title="Quizzes" />
    <Button title="Learning Resources"  />
</div>


<style>
  .gallery {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 30rem;
        margin-left: 70rem;
    }

    /* Hover effect for the non-hovered buttons */
    :global(.gallery > .button:hover ~ .button) {
        transform: scale(0.9); /* Reduce size of the non-hovered buttons */
        opacity: 0.8; /* Slightly fade the non-hovered buttons */
    }
</style>