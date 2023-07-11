export default {
    props: ['product'],
    template: `
        <article class="product-preview">
            <h3>{{ product.name }}</h3>
            <h4>{{ product.price }}</h4>
            <button @click="addToCart(product)">Add to Cart</button>
        </article>
    `,
    methods: {
        addToCart(product) {
            this.$emit('add-to-cart', product)
        }
    },
}