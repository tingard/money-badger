import React from 'react';

const RecentPayments = props => (
  <div className="container">
    {props.group.payments.slice(0, 5).map((p, i) => (
      <div className="col bg-gray-light text-dark" key={i}>
        <p className="text-dark">{p.by} paid {p.to} £{p.value}</p>
        <div className="button-group">
          <button className="button button--small button--secondary">See more</button>
        </div>
      </div>
    ))}
  </div>
);

export default RecentPayments;
