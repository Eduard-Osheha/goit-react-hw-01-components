export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td className="transaction-item">{type}</td>
      <td className="transaction-item">{amount}</td>
      <td className="transaction-item">{currency}</td>
    </>
  );
};
