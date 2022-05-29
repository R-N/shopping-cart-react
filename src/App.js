import React from 'react';
import './App.css';
import DiscountPanel from './components/DiscountPanel.js';
import ShoppingCart from './components/ShoppingCart.js';
import ShoppingSummary from './components/ShoppingSummary.js';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  subtotal(){
    let x = 0;
    for (const [id, qty] of Object.entries(this.props.items)) {
      x += this.props.availableItems[id].price * qty;
    }
    return x;
  }

  render() {
    return (
      <div>
        <div className="container-fluid text-center" >
          <h3 id="title" className="my-4">Shopping cart</h3>
        </div>
        <div className="container-fluid px-5 py-2" id="main">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <ShoppingCart items={this.props.items} availableItems={this.props.availableItems} />
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="d-grid">
                <div className="row">
                  <div className="col">
                    <ShoppingSummary subtotal={this.subtotal()} shippingCost={this.props.shippingCost}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <DiscountPanel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
