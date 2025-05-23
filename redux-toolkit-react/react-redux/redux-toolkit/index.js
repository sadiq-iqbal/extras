const store = require('./app.js/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions
const unSubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(iceCreamActions.orderIceCream())
store.dispatch(iceCreamActions.orderIceCream())
store.dispatch(iceCreamActions.orderIceCream())

unSubscribe()