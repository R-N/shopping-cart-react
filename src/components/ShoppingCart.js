import React from 'react';
import CartItem from './CartItem.js';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  count(){
    return Object.keys(this.props.items).length;
  }
  
  render() {
    return (
      <div className="card ms-lg-4 shadow my-2 p-2">
        <div className="card-body">
          <h6 className="mb-1 card-title fw-bold">Cart ({this.count()} items)</h6>
          {
            Object.keys(this.props.items).map((key, index) => {
              let item = 
                <CartItem 
                  key={key}
                  itemId={key}
                  item={this.props.availableItems[key]}
                  qty={this.props.items[key]}
                  hr={index > 0}
                />;
              if (index > 0){
                let hr = (
                  <div className="row" key={"hr"+key}>
                    <div className="col">
                      <hr/>
                    </div>
                  </div>
                );
                return ([
                  hr,
                  item
                ])
              }else{
                return item;
              }
            })
          }
        </div>
      </div>
    )
  }
}


export default ShoppingCart;
