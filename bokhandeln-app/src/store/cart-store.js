import { create } from 'zustand';

const useCartStore = create(set => ({
    cartBalance : 0,
    cart : [],
    increaseBalance : () => set(state => ({cartBalance : state.cartBalance + 1})),
    decreaseBalance : () => set(state => ({cartBalance : state.cartBalance - 1})),
    clearCartBalance : () => set({ cartBalance : 0 }),
    clearCart : () => set({ cart : [] }),
    addToCart : (book) => set(state => ({
        cart : 
            state.cart.some(b => b.title === book.title)
            ? state.cart.map(b =>
                b.title === book.title ? { ...b, quantity: b.quantity + 1 } : b 
              )
            : [...state.cart, { ...book, quantity : 1 }]
    })),   
    removeFromCart : (book) => set(state => ({
        cart: 
            state.cart.map(b =>
                b.title === book.title ? { ...b, quantity: b.quantity - 1 } : b
            ).filter(b => b.quantity > 0)
    })),
    // toggleLike : (post) => set(state => ({
    //     cart : 
    //         state.cart.some(p => p.id === post.id)
    //         ? state.cart.filter(p => p.id !== post.id)
    //         : [...state.cart, post]
    // })) 
}));



export default useCartStore;