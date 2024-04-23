const cartList = [];

export default cartList;

export function addItemToCart (newItem)
{   
    console.log("idddddddddd"+newItem.id)
    if (cartList.find(item => item.id === newItem.id)) {
        console.log("Element is present in the array");
      } else {
        console.log("Element is not present in the array");
        cartList.push(newItem);
    } 



    
    console.log("Added }}}}}}}} : "+newItem.price)
    console.log(cartList.length)
};


export function getCartList ()
{
    return cartList;
};


export const deleteItemFromCart = () => {};
