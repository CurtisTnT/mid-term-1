import "./style.css";

export default function MainCard(props) {
  const { mainCardItem } = props;
  const { image, movieName, description } = mainCardItem;
  return (
    <div className="card-container">
      <img src={image} alt="main-image" width={1170} height={400} />

      <div className="card-text-overlay">
        <div className="card-text-ctn">
          <h1 className="name">{movieName}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}
