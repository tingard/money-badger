import React from 'react';

const RecentCosts = props => (
  <div className="container">
    {props.group.costs.slice(0, 5).map((p, i) => (
      <div className="col bg-gray-light text-dark" key={i}>
        <p className="text-dark">{p.by} paid {p.to} £{p.value}</p>
        <ul>
          {p.tags.map((t, i) => (
            <li className="tag" key={i}>
               <a href="#">{t}</a>
            </li>
          ))}
        </ul>
        <div className="button-group">
          <button className="button button--small button--secondary">See more</button>
        </div>
      </div>
    ))}
  </div>
);

export default RecentCosts;
