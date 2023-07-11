import ProductPreview from './ProductPreview.js'

export default {
    props: ['products'],
    template: `
        <section class="product-list">
            <ul>
                <li v-for="product in products">
                    <ProductPreview @add-to-cart="addToCart" :product="product"/>
                </li>
            </ul>
        </section>
    `,
    methods: {
        addToCart(product) {
            this.$emit('add-to-cart', product)
        }
    },
    components: {
        ProductPreview,
    }
}