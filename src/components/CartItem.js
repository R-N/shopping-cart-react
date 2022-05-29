import React from 'react';
import { store, INCREASE, DECREASE, SET_QTY, REMOVE } from '../app/store';

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qty: props.qty
    }
  }
  
  notes(){
    if(this.props.item.notes){
      return "(Notes, " + this.props.item.notes + ")";
    }
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.qty !== this.props.qty){ 
      this.setState({ qty: this.props.qty });
    }
  }
  
  increase = () => {
    store.dispatch({ type: INCREASE, id: this.props.itemId, qty: 1 });
  }
  
  decrease = () => {
    store.dispatch({ type: DECREASE, id: this.props.itemId, qty: 1 });
  }
  
  setQty = (event) => {
    let qty = event.target.value;
    if (isNaN(qty) || qty === "" || (!qty && qty !==0)){
      this.setState({ qty: "" });
    }else{
      if (qty === 0 || qty < 1){
        qty = 1;
      }
      this.setState({ qty: qty });
      store.dispatch({ type: SET_QTY, id: this.props.itemId, qty: qty });
    }
  }
  
  remove = () => {
    store.dispatch({ type: REMOVE, id: this.props.itemId });
  }
  
  subtotal(){
    return (this.props.qty * this.props.item.price).toFixed(2);
  }
  
  render() {
    return (
      <div className="row cart-item my-3">
        <img className="cart-img col-sm-3 col-12" src={this.props.item.img}/>
        <div className="col-sm-9 col-12 mt-sm-0 mt-2 d-flex flex-column">
          <div className="row d-flex">
            <div className="col flex-grow-1 me-auto align-self-stretch">
              <div className="row">
                <div className="col">
                  <div className="fw-bold">{this.props.item.name}</div>
                  <div className="text-uppercase">{this.props.item.code}</div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="text-uppercase">COLOR: {this.props.item.color}</div>
                  <div className="text-uppercase">SIZE: {this.props.item.size}</div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-12 mt-sm-0 mt-2 flex-shrink-1 ms-auto">
              <div className="row">
                <div className="col">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-secondary" type="button" onClick={this.decrease}>-</button>
                    </div>
                    <input type="number" className="form-control flex-shrink-1 w-0" value={this.state.qty} onChange={this.setQty} />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" onClick={this.increase}>+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <span className="text-sm text-center">{this.notes()}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-self-stretch mt-auto">
            <div className="col align-self-stretch d-flex flex-sm-row flex-column">
              <div className="d-inline btn ps-0 mt-1 mt-sm-0">
                <i className="bi-trash me-1"></i>
                <span className="text-uppercase " onClick={this.remove}>REMOVE ITEM</span>
              </div>
              <div className="d-inline btn ps-0">
                <i className="bi-heart me-1"></i>
                <span className="text-uppercase ">MOVE TO WISHLIST</span>
              </div>
              <div className="d-inline text-nowrap ms-sm-auto me-sm-0 mx-auto flex-shrink-1 flex-grow-0 py-1">${this.subtotal()}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem;
