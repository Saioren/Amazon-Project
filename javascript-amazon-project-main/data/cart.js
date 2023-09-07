export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2, 
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
}];

export function addToCart(productId, quantity){
    let matchingItem;

    cart.forEach((cartItem)=>{
    if (productId === cartItem.productId){
    matchingItem = cartItem;
    }
    });

    if(matchingItem){
        matchingItem.quantity+= quantity;
    } else {
        cart.push({
            productId, quantity,});}; 
};



document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>{
button.addEventListener('click', ()=>{
   const productId = button.dataset.productId;

addToCart(productId, quantity);
updateCartQuantity(quantity);
const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );

const quantity = Number(quantitySelector.value);


const addedMessage = document.querySelector(
    `.js-added-to-cart-${productId}`
  );

  addedMessage.classList.add('added-to-cart-visible');

});
});

