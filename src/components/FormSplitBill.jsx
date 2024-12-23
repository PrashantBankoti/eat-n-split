function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill </h2>
      <label>💰Bill Value</label>
      <input type="text" />

      <label>🙍Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑Sarah Expense</label>
      <input type="text" disabled />

      <label>🤑Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
}

export default FormSplitBill;
