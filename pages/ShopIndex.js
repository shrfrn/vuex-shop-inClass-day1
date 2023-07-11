import { showSuccessMsg } from '../services/event-bus.service.js'
import { productService } from '../services/product.service.js'

import ProductList from '../cmps/ProductList.js'
import AddProduct from '../cmps/AddProduct.js'
import Spinner from '../cmps/Spinner.js'

export default {
    template: `
        <section v-if="products" class="shop-page router-view">
            <h1>The Shop</h1>   
            <ProductList @add-to-cart="addToCart" :products="products"/>
            <AddProduct />
        </section>
        <section v-else class="Spinner">
            <Spinner />
        </section>
    `,
    data() {
        return {
            products: null
        }
    },
    created() {
        productService.query()
            .then(products => this.products = products)
    },
    methods: {
        addToCart(product) {
            console.log(`Adding ${product._id} to Cart`)
            showSuccessMsg(`TODO: Add ${product._id} to Cart`)
        },
    },
    components: {
        ProductList,
        AddProduct,
        Spinner,
    }
}