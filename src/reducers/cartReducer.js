export const actionTypes = {
    add: "ADD_TO_CART",
    remove: "REMOVE_FROM_CART",
    clearAll: "CLEAR_ALL_CART"

}

// data = [{
// id: "String",
// quantity: number
// }]

export default function cartReducer(state, action) {
    // action = {type: (delete, add, edit), payload: (data)}


    switch (action.type) {
        case actionTypes.add:
            const foundIndex = state.findIndex(item => item.id == action.payload);
            if (foundIndex != -1) {
                const temp = [...state]
                temp[foundIndex].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(temp))
                return temp
            } else {
                localStorage.setItem("cart", JSON.stringify([...state, { id: action.payload, quantity: 1 }]))
                return [...state, { id: action.payload, quantity: 1 }]
            }

        case actionTypes.remove:
            const foundIndex2 = state.findIndex(item => item.id == action.payload);
            if (foundIndex2 != -1) {
                if (state[foundIndex2].quantity > 1) {
                    state[foundIndex2].quantity -= 1;
                    localStorage.setItem("cart", JSON.stringify(state))
                    return state
                } else {
                    const temp2 = [...state]
                    temp2.splice(foundIndex2, 1)
                    localStorage.setItem("cart", JSON.stringify(temp2))
                    return temp2
                }
            } else {
                localStorage.setItem("cart", JSON.stringify(state))
                return state
            }

        case actionTypes.clearAll:
            localStorage.setItem("cart", JSON.stringify([]))
            return []

        default:

            return state
    }

}