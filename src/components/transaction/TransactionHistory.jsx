import {
  TableWrap,
  TableTitle,
  TableRowWrap,
  TableItem,
} from './Transaction.styled';

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
            <TableItem>{item.type}</TableItem>
            <TableItem>{item.amount}</TableItem>
            <TableItem>{item.currency}</TableItem>
          </TableRowWrap>
        ))}
      </tbody>
    </TableWrap>
  );
};
