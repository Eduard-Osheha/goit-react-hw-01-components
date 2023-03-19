import PropTypes from 'prop-types';
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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
