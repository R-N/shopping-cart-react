import React from 'react';

function gratis(x){
  return x.toFixed(2) > 0 ? "$"+x.toFixed(2) : "Gratis";
}

class ShoppingSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  subtotal(){
    return gratis(this.props.subtotal);
  }
  
  shippingCost(){
    return gratis(this.props.shippingCost);
  }
  
  total(){
    return gratis(this.props.subtotal + this.props.shippingCost);
  }
  
  render() {
    return (
      <div className="card me-lg-4 ms-lg-1 my-2 shadow p-2">
        <div className="card-body">
          <h6 className="card-title fw-bold">The total amount of</h6>
          <div className="d-flex align-items-center">
            <div className="d-inline me-auto flex-grow-1 align-self-stretch">Temporary amount</div>
            <div className="d-inline ms-auto flex-shrink-1 align-middle align-self-center text-center py-auto">{this.subtotal()}</div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-inline me-auto flex-grow-1 align-self-stretch">Shipping</div>
            <div className="d-inline ms-auto flex-shrink-1 align-middle align-self-center text-center py-auto">{this.shippingCost()}</div>
          </div>
          <hr/>
          <div className="d-flex align-items-center fw-bold">
            <div className="d-inline me-auto flex-grow-1 align-self-stretch">
              <span>The total amount of&nbsp;</span>
              <span>(inlcuding VAT)</span>
            </div>
            <div className="d-inline ms-auto flex-shrink-1 align-middle align-self-center text-center py-auto">{this.total()}</div>
          </div>
          <div className="d-grid mt-3">
            <button type="button" className="btn btn-primary text-uppercase">GO TO CHECKOUT</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ShoppingSummary;
