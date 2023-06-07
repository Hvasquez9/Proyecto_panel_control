export const Productos = () => {
    return(
      <>
        <button onClick={() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
        .catch(error => console.log(error))
        }}>Productos</button>

      </>   
    )
}
