import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Modal, IconButton, Snackbar, Alert } from '@mui/material';
import { useDispatch } from 'react-redux'; // Importuojame useDispatch
import { loginUser, registerUser } from '../../../redux/authActions'; // Importuojame veiksmus
import { styled, useTheme } from '@mui/material/styles';
import { GitHub as GitHubIcon, Close as CloseIcon } from '@mui/icons-material'; 
import SpecialButton from '../SpecialButton';

const SignupModal = ({ open, onClose }) => {
    const [notification, setNotification] = useState({ open: false, message: '', severity: 'success', type:'' });

    const theme = useTheme();
    const dispatch = useDispatch(); // Naudojame useDispatch
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleGitHubLogin = () => {
        console.log('Redirecting to GitHub login...');
        // Integruokite GitHub OAuth čia
    };

    const handleSubmit = async () => {
        let result;
    
        if (isLoggedIn) {
            result = await dispatch(loginUser(email, password));
            console.log("result ", result);
        } else {
            if (password === repeatPassword) {
                result = await dispatch(registerUser(email, username, password, repeatPassword));
            } else {
                result = { status: 'error', message: "Passwords do not match", type: 'password' };
            }
        }
    
        setNotification({
            open: true,
            message: result.message,
            severity: result.status === 'success' ? 'success' : 'error',
            type: result.type 
        });

    
    
        if (result.status === 'success') onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <StyledModal>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        {isLoggedIn ? 'Login' : 'Create Account'}
                    </Typography>
                    <CloseBtn onClick={onClose} color={theme.palette.text.primary}>
                        <CloseIcon />
                    </CloseBtn>
                </Box>

                {/* <Snackbar
                    open={notification.open}
                    autoHideDuration={6000}
                    onClose={() => setNotification({ ...notification, open: false })}>
                    <Alert onClose={() => setNotification({ ...notification, open: false })} severity={notification.severity}>
                        {notification.message}
                    </Alert>
                </Snackbar> */}

                <TextField 
                    sx={InputStyle} 
                    label="Email" 
                    variant="outlined" 
                    fullWidth 
                    // sx={{ mb: 2 }} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={notification.type === 'email' || notification.type === 'unknown'} // Jei tipas yra "email", rodom klaidą
                    helperText={notification.type === 'email' || notification.type === 'unknown' ? notification.message : ''} // Jei tipas atitinka, rodom klaidos pranešimą
                />
                {!isLoggedIn && (
                    <TextField 
                        label="Username" 
                        variant="outlined" 
                        fullWidth 
                        sx={InputStyle}  
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={notification.type === 'username'} 
                        helperText={notification.type === 'username' ? notification.message : ''} 
                    />
                )}
                <TextField 
                    label="Password" 
                    type="password" 
                    variant="outlined" 
                    fullWidth 
                    sx={InputStyle} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={notification.type === 'password'}
                    helperText={notification.type === 'password' ? notification.message : ''}
                />
                {!isLoggedIn && (
                    <TextField 
                        label="Repeat Password" 
                        type="password" 
                        variant="outlined" 
                        fullWidth 
                        sx={InputStyle} 
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                )}


                <SpecialButton hoverEffectEnabled={false} fullWidth onClick={handleSubmit}>
                    {isLoggedIn ? 'Login' : 'Create Account'}
                </SpecialButton>

                <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    startIcon={<GitHubIcon />}
                    onClick={handleGitHubLogin}>
                    {isLoggedIn ? 'Create Account with GitHub' : 'Login with GitHub'}
                </Button>

                <Button
                    variant="text"
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    sx={{ mt: 2, textAlign: 'center' }} >
                    {isLoggedIn ? 'Already have an account? Login' : 'Don’t have an account? Register'}
                    
                </Button>
            </StyledModal>
        </Modal>
    );
};

const InputStyle = {
    mb: 2, 
    '& .MuiOutlinedInput-root.Mui-focused': {
        '& fieldset': {
            borderColor: 'white', 
        },
        '& input': {
            color: 'white',  
        },
        '& .MuiInputLabel-root': {
            color: 'white',  
        }
    },
    '& .MuiInputLabel-root': {
        color: 'white',  
    }
};


const CloseBtn = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    right:'10px',
    top:'10px'
}));

const StyledModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '8px',
  border: `2px solid ${theme.palette.btn.primary}`,
  background: `
      radial-gradient(circle at 100% 20%, rgba(174, 68, 90, 0.8), rgba(174, 68, 90, 0) 30%),
      radial-gradient(circle at 50% 100%, rgba(174, 68, 90, 0.6), rgba(174, 68, 90, 0) 30%),
      radial-gradient(circle at 0% 20%, rgba(174, 68, 90, 0.7), rgba(174, 68, 90, 0) 30%)
  `,
  backgroundColor: '#0a0a0a',  
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
}));


export default SignupModal;