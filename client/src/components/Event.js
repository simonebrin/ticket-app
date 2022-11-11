export default function Event({
  title,
  image,
  date,
  location,
  onClick = () => {},
}) {
  return (
    <div
      onClick={() => onClick({ title, image, date, location })}
      className="card"
    >
      <div>
        <img src={image} />
      </div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{location}</div>
    </div>
  );
}
