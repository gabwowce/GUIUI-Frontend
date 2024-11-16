import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Modal, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux'; // Importuojame useDispatch
import { loginUser, registerUser } from '../../../redux/authActions'; // Importuojame veiksmus
import { styled, useTheme } from '@mui/material/styles';
import { GitHub as GitHubIcon, Close as CloseIcon } from '@mui/icons-material'; 
import SpecialButton from '../SpecialButton';

const SignupModal = ({ open, onClose }) => {
    const theme = useTheme();
    const dispatch = useDispatch(); // Naudojame useDispatch
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleGitHubLogin = () => {
        console.log('Redirecting to GitHub login...');
        // Integruokite GitHub OAuth čia
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
    };

    const handleSubmit = () => {
        const userData = { email, password };
        if (isLoggedIn) {
            dispatch(loginUser(userData));  // Prisijungimas
        } else {
            if (password === repeatPassword) {
                dispatch(registerUser(userData));  // Registracija
            } else {
                console.error("Passwords do not match");
            }
        }
        onClose();  // Uždaryti modalą po veiksmų
    };

    return (
        <Modal open={open} onClose={onClose}>
            <StyledModal>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        {isLoggedIn ? 'Create Account' : 'Login'}
                    </Typography>
                    <CloseBtn onClick={onClose} color={theme.palette.text.primary}>
                        <CloseIcon />
                    </CloseBtn>
                </Box>

                <TextField 
                    label="Email" 
                    variant="outlined" 
                    fullWidth 
                    sx={{ mb: 2 }} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    label="Password" 
                    type="password" 
                    variant="outlined" 
                    fullWidth 
                    sx={{ mb: 2 }} 
                    value={password}
                    onChange={handlePasswordChange}
                />
                
                {!isLoggedIn && (
                    <TextField 
                        label="Repeat Password" 
                        type="password" 
                        variant="outlined" 
                        fullWidth 
                        sx={{ mb: 2 }} 
                        value={repeatPassword}
                        onChange={handleRepeatPasswordChange}
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
                    sx={{ mt: 2, textAlign: 'center' }}>
                    {isLoggedIn ? 'Already have an account? Login' : 'Don’t have an account? Register'}
                </Button>
            </StyledModal>
        </Modal>
    );
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
  backgroundColor: '#0a0a0a',  // Tai užtikrins, kad modalas bus šviesiai nepermatomas
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
}));


export default SignupModal;