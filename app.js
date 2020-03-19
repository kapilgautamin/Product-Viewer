'use strict';
function SizeSelector(props){
  
  function sizeOptions(){
    return props.sizes.map(function(num){
      return (
        <option value={num} key={num}>
            {num}
        </option>
      );
    });
  }

  return (
    <div>
      <label htmlFor="size-options">Size: </label>
      <select defaultValue={props.size} name="size-options">
        {sizeOptions()}
      </select>
    </div>
  );
}

function ProductImage(props){
  return <img src={`assets/${props.color}.jpg`} alt="Product Image" />;
}

function Product(props){
  var [size, setSize] = React.useState(9);
  var [color, setColor] = React.useState("red");
  var [sizes, setSizes] = React.useState(window.Inventory.allSizes);


  return (
    <div className="customizer">
      <div className="product-image">
        <ProductImage color={color}/>
      </div>
      <div className="selector">
        <SizeSelector size={size} sizes={sizes}/>
      </div>
    </div>
  );
}

const domContainer = document.getElementById('react-root');

ReactDOM.render(<Product />, domContainer);