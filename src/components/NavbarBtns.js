import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavbarBtns = ({ variant, to, label, startIcon, onClick, sx }) => {
  return (
    <Button 
        variant={variant}
        component={Link} 
        to={to}
        onClick={onClick} 
        startIcon={startIcon}
        sx={sx}
        >
        {label}
    </Button>
  );
};

export default NavbarBtns;


