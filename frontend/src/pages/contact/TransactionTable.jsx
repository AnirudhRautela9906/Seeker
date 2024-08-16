import React, { useEffect, useState } from 'react';
import './Contact.scss';
import { useSelector } from 'react-redux';
const TransactionTable = () => {
  const { user } = useSelector( state => state.user );
  const [transactions, setTransaction ] = useState();

 useEffect(()=>{
  
    setTransaction(user?.transactions);
    console.log(user?.transactions);
  
 },[user])
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
        {transactions?.map((transaction, index) => (
        <tr key={index}>
          <td>{transaction.transactionCode}</td>
          <td>{transaction.job.title}</td>
          <td>{transaction.price}</td>
          <td>{transaction.job.jobPostDateTime}</td>
        </tr>))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
