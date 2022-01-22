
function QuantityBtn({quantity , setquantity}) {
    
  const AddQuantity = () => {
    const newQuantity = quantity + 1;
    setquantity(newQuantity);

  }
  const subQuantity = () => {
    if(quantity <=1) return;
    const newQuantity = quantity - 1;
    setquantity(newQuantity);

  }

  return (
    <div className="sign">
      <button onClick={subQuantity} id="minus">
        <i className="fa fa-minus"></i>
      </button>
      <small id="quantity">{quantity}</small>
      <button onClick={AddQuantity} id="plus">
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
}
export default QuantityBtn;
