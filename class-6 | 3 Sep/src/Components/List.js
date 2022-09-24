function List(props) {
  return (
    <>
      <h1 id={props.headingId}>List</h1>
      <ul>
        {props.kuchBhi.map((value) => {
          // Every item in list should have a unique key
          return (
            <li key={"list-item" + value.id}>
              <b>{value.title}</b>
              <br /> {value.body}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
