import React, { useState, useRef,useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux'; 
import { styled } from '@mui/material/styles';

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProfileNavBtn = () => {
    const user = useSelector((state) => state.auth.user);  

    const theme = useTheme();
    const [open, setOpen] = useState(false); 

    const buttonRef = useRef(null); 
    const menuRef = useRef(null);

    console.log("User: ", user);

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
            setOpen(false); 
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside); 
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside); 
        };
    }, []);
    
    return(
        <>
        
        <Button
            ref={buttonRef}
            variant="ProfileText"
            startIcon={<KeyboardArrowDownIcon />}
            onClick={()=>setOpen(!open)}
            sx={{backgroundColor: open && theme.palette.btn.primary}}>
            {user && user.name ? user.name : "Undefined"}
            
        </Button>

        {
        open &&
        <StyledMenu ref={menuRef}>
            <Button variant="menuItemSm" startIcon={<SentimentSatisfiedAltIcon />}>Your Profile</Button>
            <Button variant="menuItemSm" startIcon={<FavoriteBorderIcon />}>Your Favorites</Button>
            <Button variant="menuItemSm" startIcon={<LogoutIcon />}>Log out</Button>
        </StyledMenu>
        }
        </>
        

    )
}

export default ProfileNavBtn;

const StyledMenu = styled(Box)(({ theme }) => ({
    position:'absolute',
    borderRadius:'8px',
    top:'60px',
    right:'25px',
    background: theme.palette.background.default,
    border: `1px solid ${theme.palette.btn.primary}`,
    display: 'grid', 
    gridTemplateColumns: '1fr', 
    gap: theme.spacing(0.3),
    padding:'0.3rem',

    zIndex:9999,
  
  }));