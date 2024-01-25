import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <i class='fa fa-book fa-3x' aria-hidden='true'></i>
        <h1 className='header-title'>Book Finder</h1>
      </div>
    </header>
  );
};

export default Header;
