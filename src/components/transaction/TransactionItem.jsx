import { TableItem } from './Transaction.styled';

export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <TableItem className="transaction-item">{type}</TableItem>
      <TableItem className="transaction-item">{amount}</TableItem>
      <TableItem className="transaction-item">{currency}</TableItem>
    </>
  );
};
