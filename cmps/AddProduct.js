import { productService } from '../services/product.service.js'

export default {
    template: `
        <section class="add-product">
            <h3>Add Product</h3>
            <form @submit.prevent="addProduct">
                <input type="text" placeholder="Name" v-model="productToEdit.name" />
                <input type="number" placeholder="Price" v-model.number="productToEdit.price" />
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            productToEdit : productService.getEmptyProduct(),
        }
    },
    methods: {
        addProduct() {
            console.log('Adding...', this.productToEdit)
            this.productToEdit  = productService.getEmptyProduct()
        }
    },
}