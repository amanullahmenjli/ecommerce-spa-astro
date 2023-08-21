<script>
    import { isCartOpen } from './cartStore'
</script>

<!--use "$" to read the store value-->
<button on:click={() => isCartOpen.set(!$isCartOpen)}>Cart</button>
