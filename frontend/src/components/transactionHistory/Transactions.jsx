import React, { useEffect, useState } from 'react';
import './Transactions.scss';
import { useSelector } from 'react-redux';
const TransactionTable = () => {
  const { user } = useSelector( state => state.user );
  const [transaction, setTransaction ] = useState();
 useEffect(()=>{
    setTransaction(user.transaction);
 },[user?.transaction])
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Transaction Code</th>
          <th>Job Title</th>
          <th>Amounts</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transaction?.map((item, index) => (
        <tr key={index}>
          <td>{transaction.transactionCode}</td>
          <td>{transaction.job.title}</td>
          <td>{transaction.price}</td>
          <td>{transaction.jobPostDateTime}</td>
        </tr>))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
