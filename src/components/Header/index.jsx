import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <h2 className="header-anonime">Anonime</h2>

      <h6 className="header-nav">Home</h6>

      <h6 className="header-nav">List anime</h6>

      <input
        type="text"
        placeholder="Search anime or movie"
        className="header-search"
      />
    </header>
  );
}
