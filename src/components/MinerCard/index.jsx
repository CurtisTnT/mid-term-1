import "./style.css";

export default function MinerCard(props) {
  const { image, episode, movieName, onSelectAnime } = props;
  return (
    <div className="card-ctn" onClick={onSelectAnime}>
      <div className="image-ctn">
        <img
          src={image}
          alt="anime-image"
          width={170}
          height={204}
          className="image"
        />

        <div className="episode-ctn">
          <div className="episode">Episode {episode}</div>
        </div>
      </div>

      <p className="movie-name">{movieName}</p>
    </div>
  );
}
