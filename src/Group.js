import React from 'react';
import RecentPayments from './RecentPayments';

const Group = ({ group }) => (
  <div className="container">
    <div className="border bg-body">
      <h2 className="text-big text-gray">{group.name}</h2>
      <div className="section">
        <h3 className="text-medium">Recent Payments</h3>
        <RecentPayments group={group} />
      </div>
      <div className="section">
        <h3 className="text-medium">Recent Costs</h3>
        <RecentPayments group={group} />
      </div>
    </div>
  </div>
);

export default Group;
