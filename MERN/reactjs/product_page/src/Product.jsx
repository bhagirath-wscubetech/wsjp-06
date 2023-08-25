
function Product(props) {
    return <div className="box">
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <h1>{props.rating} ⭐</h1>
    </div>
}

export default Product;