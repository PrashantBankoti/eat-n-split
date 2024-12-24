import Button from "./Button";

function Friend({ friend, onSelectFriend }) {
  let currbalance = friend.balance;
  return (
    <>
      <li>
        <img src={friend.image} alt={friend.image} />
        <h3>{friend.name}</h3>
        <p
          className={`${
            currbalance < 0 ? "red" : currbalance > 0 ? "green" : ""
          }`}
        >
          {currbalance < 0
            ? `You Owe ${friend.name} ${-1 * currbalance}$`
            : currbalance > 0
            ? `${friend.name} owes you ${currbalance}$`
            : `You and ${friend.name} are even`}
        </p>
        <Button onClick={() => onSelectFriend(friend)}>Select</Button>
      </li>
    </>
  );
}

export default Friend;
