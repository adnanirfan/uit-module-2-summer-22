const Form = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Type your todo here"
        value={props.text}
        onChange={(event) => props.setText(event.target.value)}
      />
      <button
        onClick={() => {
          props.onAdd(props.text);
        }}
      >
        Add
      </button>
      <button onClick={() => props.onDeleteAll()}>Delete ALL</button>
    </div>
  );
};

export default Form;
