import React from 'react';

const Navbar = ({ onClickItem }) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
          </button>
          <a className="navbar-brand" href="#">News Feed</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories{' '}<span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li onClick={onClickItem}><a href="#">StartUps</a></li>
              <li onClick={onClickItem}><a href="#">Business</a></li>
              <li onClick={onClickItem}><a href="#">Technology</a></li>
              <li onClick={onClickItem}><a href="#">Entertainment</a></li>
              <li onClick={onClickItem}><a href="#">Sports</a></li>
              <li onClick={onClickItem}><a href="#">Science</a></li>
              <li onClick={onClickItem}><a href="#">Health</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
