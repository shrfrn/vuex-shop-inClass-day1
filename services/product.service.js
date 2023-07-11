'use strict'

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const PRODUCT_KEY = 'productDB'

_createProducts()

export const productService = {
    query,
    get,
    remove,
    save,
    getEmptyProduct,
}

function query(filterBy = {}) {
    return storageService.query(PRODUCT_KEY)
        .then(products => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                products = products.filter(product => regex.test(product.name))
            }
            if (filterBy.maxPrice) {
                products = products.filter(product => product.price <= filterBy.maxPrice)
            }
            return products
        })
}

function get(productId) {
    return storageService.get(PRODUCT_KEY, productId)
}

function remove(productId) {
    return storageService.remove(PRODUCT_KEY, productId)
}

function save(product) {
    if (product.id) {
        return storageService.put(PRODUCT_KEY, product)
    } else {
        return storageService.post(PRODUCT_KEY, product)
    }
}

function getEmptyProduct(name = '', price = 0) {
    return { _id: '', name, price }
}

function _createProducts() {
    let products = utilService.loadFromStorage(PRODUCT_KEY)
    if (!products || !products.length) {
        products = []
        products.push(_createProduct('TV', 310))
        products.push(_createProduct('Radio', 120))
        products.push(_createProduct('Computer', 280))
        utilService.saveToStorage(PRODUCT_KEY, products)
    }
}

function _createProduct(name, price) {
    const product = getEmptyProduct(name, price)
    product._id = utilService.makeId()
    return product
}
