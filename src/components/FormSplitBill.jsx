import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBillForm }) {
  const [billValue, setBillValue] = useState("");
  const [expense, setExpense] = useState("");
  const [userPaying, setUserPaying] = useState("user");
  const friendShare = billValue ? billValue - expense : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!billValue || !expense) return;
    onSplitBillForm(userPaying === "user" ? friendShare : -billValue);
    setBillValue("");
    setExpense("");
    setUserPaying("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>{`Split a bill with ${selectedFriend?.name}`}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />

      <label>🙍Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > billValue
              ? expense
              : Number(e.target.value)
          )
        }
      />

      <label>🧑‍🤝‍🧑{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendShare} />

      <label>🤑Who is paying the bill?</label>
      <select
        value={userPaying}
        onChange={(e) => setUserPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
