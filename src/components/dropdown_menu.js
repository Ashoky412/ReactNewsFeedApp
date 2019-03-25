import React from 'react';
// import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

const DropDownMenu = () => {
  return (
    <div className="dropdown dropdown-btn">
      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        Categories{' '}
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
        <li>
          <a href="#">Action</a>
        </li>
        <li>
          <a href="#">Another action</a>
        </li>
        <li>
          <a href="#">Something else here</a>
        </li>
        <li role="separator" className="divider"></li>
        <li>
          <a href="#">Separated link</a>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;

// const DropDownMenu = () => {
//   return (
//     <ButtonToolbar>
//       <DropdownButton bsStyle='default' title='Default' id='dropdown-btn'>
//         <MenuItem eventKey="1">Action</MenuItem>
//         <MenuItem eventKey="2">Another action</MenuItem>
//         <MenuItem eventKey="3" active>Active Item</MenuItem>
//         <MenuItem divider />
//         <MenuItem eventKey="4">Separated link</MenuItem>
//       </DropdownButton>
//     </ButtonToolbar>
//   );
// }
