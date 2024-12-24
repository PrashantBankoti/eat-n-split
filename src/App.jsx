import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState("");
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriendsList((friends) => [...friends, friend]);
  }

  function handleSelectFriend(friend) {
    console.log(friend);
    setSelectedFriend(friend);
  }
  console.log("selectedFriend--->", selectedFriend);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friendsList} onSelectFriend={handleSelectFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {!showAddFriend ? "Add Friend" : "Close"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}
export default App;
