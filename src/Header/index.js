import Clock from "./Clock";

const Header = ({ title }) => (
    <header className="header">
      <Clock />
      <h1>{title}</h1>
    </header>
  );

export default Header;