import { useState } from "react";
import Button from "./Button";

function FormAddFriend() {
  const RandomNum = Math.floor(1000 + Math.random() * 9000);
  const [name, setName] = useState("");
  const [image, setImage] = useState(`https://i.pravatar.cc/48?u=${RandomNum}`);

  function handleSubmit(e) {
    e.preventDefault();
    const newFriend = {
      name,
      image,
      balance: 0,
      id: crypto.randomUUID(),
    };
    console.log(newFriend);
  }

  return (
    <div className="form" onSubmit={handleSubmit}>
      <form className="form-add-friend">
        <label>👬Friend name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
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
