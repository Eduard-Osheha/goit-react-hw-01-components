import { TransactionItem } from './TransactionItem';
import { TableWrap, TableTitle, TableRowWrap } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableWrap>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableRowWrap key={item.id}>
            <TransactionItem item={item} />
          </TableRowWrap>
        ))}
      </tbody>
    </TableWrap>
  );
};
