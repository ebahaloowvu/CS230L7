import React from "react";

const Card = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card bg-primary text-white">
          <div className="card-body">
            <h5 className="card-title mb-4">Card 1</h5>
            <p className="card-text">This is card 1 content.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card bg-success text-white">
          <div className="card-body">
            <h5 className="card-title mb-4">Card 2</h5>
            <p className="card-text">This is card 2 content.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card bg-warning text-dark">
          <div className="card-body">
            <h5 className="card-title mb-4">Card 3</h5>
            <p className="card-text">This is card 3 content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
