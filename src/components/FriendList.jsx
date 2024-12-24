import Friend from "./Friend";

function FriendList({ friends, onNewFriendList }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend
          friend={friend}
          key={friend.id}
          onNewFriendList={onNewFriendList}
        />
      ))}
    </ul>
  );
}

export default FriendList;
