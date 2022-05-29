import React from 'react';

class DiscountPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (
      <div className="card me-lg-4 ms-lg-1  my-2 shadow p-2">
        <div className="card-body">
          <div className="d-flex align-items-center btn p-0">
            <div className="d-inline me-auto flex-grow-1 align-self-stretch text-start">Add a discount code (optional)</div>
            <div className="d-inline ms-auto flex-shrink-1 align-middle align-self-center text-center py-auto">
              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscountPanel;
