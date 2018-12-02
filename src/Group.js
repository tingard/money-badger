import React from 'react';
import RecentPayments from './RecentPayments';
import RecentCosts from './RecentCosts';

const Group = ({ group }) => (
  <div className="container">
    <div className="border bg-gray-light p-medium">
      <h2 className="text-huge text-dark">{group.name}</h2>
      <div className="border-bottom pb-medium">
        <h3 className="text-big text-dark">Recent Payments</h3>
        <RecentPayments group={group} />
      </div>
      <div className="">
        <h3 className="text-big text-dark">Recent Costs</h3>
        <RecentCosts group={group} />
      </div>
    </div>
  </div>
);

export default Group;
