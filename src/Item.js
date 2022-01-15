function Item(props) {
  return (
    <div className="ItemList-item" key={props.item}>{props.item}</div>
  );
}

export default Item;

