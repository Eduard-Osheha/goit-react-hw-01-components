export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      {isOnline ? (
        <span
          className="status-online"
          style={{
            display: 'flex',
            border: '1px solid green',
            borderRadius: 50,
            width: 15,
            height: 15,
            backgroundColor: 'green',
          }}
        ></span>
      ) : (
        <span
          className="status-offline"
          style={{
            display: 'flex',
            borderRadius: 50,
            width: 15,
            height: 15,
            backgroundColor: '#757575',
          }}
        ></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};
