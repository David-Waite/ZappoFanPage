import sanitizeHtml from "sanitize-html";

export default function FlavourText(props) {
  const style = {
    color: props.currentZappo.color,
  };

  return (
    <div className="flavourText">
      <h3 style={style}>{props.currentZappo.name}</h3>
      <h4
        style={style}
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(props.currentZappo.description),
        }}
      ></h4>
    </div>
  );
}
