import Friend from "./Friend";
import { initialFriends } from "../App";
function FriendList({ onShowSplitBill, showSplitBill, onIndex }) {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendList;
