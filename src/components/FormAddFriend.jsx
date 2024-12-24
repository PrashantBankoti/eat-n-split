import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const RandomNum = Math.floor(1000 + Math.random() * 9000);
  const [name, setName] = useState("");
  const [image, setImage] = useState(`https://i.pravatar.cc/48`);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image: `${image}?=${RandomNum}`,
      balance: 0,
    };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <div className="form" onSubmit={handleSubmit}>
      <form className="form-add-friend">
        <label>👬Friend name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>🖼️Image Url</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </div>
  );
}

export default FormAddFriend;
