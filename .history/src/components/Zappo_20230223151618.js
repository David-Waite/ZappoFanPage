export default function Zappo(props) {
  return (
    <div>
      <img
        onMouseOver={props.displayText}
        className={props.name}
        src={require(`../assets/images/${props.image}`)}
        alt="watermelonZappo"
      />
    </div>
  );
}
