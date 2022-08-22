import { createContext, useState } from "react";
// 1. Inicializamos el Context con React.createContext()
// 2. Creamos un Provideryle damos un"value"
// 3. Definimos los componentes que vanaacceder al context(Consumers)
// 4. Damosalos componentes acceso al context con el hook useContext()
// 5. Los componentes consumers podrán accedery"subscribirse"al"value"del context



export const cartContext = createContext()


export function CartProvider ({children}){
    const [cart, setCart] = useState([])
    let copyCart = [...cart]
    //funcion de agregar al carrito
    function addToCart(item, cantidad){
        //si el producto existe solo aumentar cantidad 

        if (isInCart(item.id)){
            const itemIndex = findItem(item.id)
            copyCart[itemIndex].cantidad += cantidad
            setCart(copyCart)
            console.log(copyCart)
        }
        // Si no existe pushearlo al carrito
        else{
            copyCart.push({...item,quantity:cantidad})
            item.stock-= cantidad
            setCart(copyCart)
            console.log(copyCart)   
        }
    }

// funcion para remover un item por su id
// function removeItem(data){
//     const itemRemove = findItem(data.id)
//     const indexItem = copyCart.indexOf(itemR
//     copyCart.splice(indexItem,1)
//     setCart(copyCart)
//     console.log(copyCart)}

// funcion vaciar al carrito
// function removeAll(){
//     copyCart = []
//     setCart(copyCart)
//     console.log(copyCart)

 function isInCart(id){
    return ( cart.some(itemInCart => itemInCart.id === id))
    }

function findItem(id) {
    return (copyCart.find(item => item.id === Number.id))
}

           
    return(
        <cartContext.Provider value={{cart, addToCart}}>
            {children}
        </cartContext.Provider>
    )
}