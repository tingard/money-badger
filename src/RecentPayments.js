import React from 'react';

const RecentPayments = props => (
  <div className="container">
    {props.group.payments.slice(0, 5).map(p => (
      <div class="col bg-gray-light text-gray">
        <p className="text-dark">{p.by} paid {p.to} £{p.value}</p>
        <div className="button-group">
          <button className="button button--small button--secondary">See more</button>
        </div>
      </div>
    ))}
  </div>
);

export default RecentPayments;
