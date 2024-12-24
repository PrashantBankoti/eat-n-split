import Friend from "./Friend";

function FriendList({ friends, onSelectFriend }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
}

export default FriendList;
