export const Pedidos = () => {

   
    return(
        <>
          <button onClick={() => {
          fetch('https://fakestoreapi.com/carts')
          .then(res=>res.json())
          .then(json=>console.log(json))
          .catch(error => console.log(error))
          }}
          >Pedidos</button>
        </>
    )
}