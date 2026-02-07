function Header() {
  return (
    <header id="header" className="hero">
      <div className="first-name-wrapper">
        <h1 className="Fname">Thembela</h1>
        <h2 className="hero-title">Aspiring Software Developer</h2>
      </div>

      <div className="last-name-wrapper">
        <h1 className="Lname">Veleleni</h1>
        <div className="links">
          <a className="btn">CV</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;