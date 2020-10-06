import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const mon = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December']
const Row = ({ data }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
     
      <tr className='row'>
        <td >{data.title}</td>
        <td >{mon[new Date(data.date).getMonth()]} {new Date(data.date).getDate()}, {new Date(data.date).getFullYear()}</td>
        <td >{data.status || 'Draft'}</td>
        <td ><Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <FontAwesomeIcon icon={faEllipsisV} />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              >
              <MenuItem onClick={handleClose}>Duplicate</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
            </Menu></td>
        <style jsx>{`
          .row {
            border-bottom: 1px solid #f3f3f3;;
            text-align: left;
            text-indent: 7%;
          }

          tr::before {
            content: "";
            display: block;
            position: static;
            width: 5px;
            height: 50px;
            background-color: #a8dbae;
          }

          td {
            height: 50px;
          }
        `}</style>
      </tr>
    );
  }
  
export default Row;