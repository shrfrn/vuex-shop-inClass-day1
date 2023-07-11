import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const USER_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    getLoggedinUser,
    login,
    logout,
    signup,
    get,
    updateBalance,
    addOrder,
    changeOrderStatus
}

// Demo Data:
// signup({fullname: 'Baba Ji', username: 'baba', password: '123'})
login({username: 'baba', password: '123'})


function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || null)
}


function login(credentials) {
    return storageService.query(USER_KEY)
        .then(users => {
            const user = users.find(u => u.username === credentials.username)
            if (user) {
                return _saveUserToStorage(user)
            } else {
                return Promise.reject('Invalid credentials')
            }
        })
}

function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return Promise.resolve()
}

function signup(credentials) {
    return storageService.query(USER_KEY)
        .then(users => {
            const user = users.find(u => u.username === credentials.username)
            if (user) return Promise.reject('Username already taken')
            return storageService.post(USER_KEY, {...credentials, balance: 600, orders: []})
                .then(user => {
                    return _saveUserToStorage(user)
                })
        })
}

function get(userId) {
    return storageService.get(USER_KEY, userId)
}

function updateBalance(amount) {
    const user = getLoggedinUser()
    user.balance += amount
    return storageService.put(USER_KEY, user).then(savedUser => {
        _saveUserToStorage(savedUser)
        return savedUser.balance
    })
}

function _saveUserToStorage(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function addOrder(cart, total) {
    const user = getLoggedinUser()

    const order = {
        _id: utilService.makeId(),
        createdAt: Date.now(),
        items: cart,
        total,
        status: 'PENDING',
    }   
    user.balance -= total 
    user.orders.unshift(order)

    return storageService.put(USER_KEY, user).then(savedUser => {
        _saveUserToStorage(savedUser)
        return savedUser
    })
}

function changeOrderStatus(orderId, status) {
    const user = getLoggedinUser()
    const order = user.orders.find(order => order._id === orderId)
    order.status = status
    
    return storageService.put(USER_KEY, user).then(savedUser => {
        _saveUserToStorage(savedUser)
        return order
    })
}



