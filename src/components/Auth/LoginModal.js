import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';  // Redux veiksmas prisijungimui

const LoginModal = ({ open, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser({ email, password }));
        onClose();  // Uždaryti modalą po sėkmingo prisijungimo
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Prisijungimas</DialogTitle>
            <DialogContent>
                <TextField
                    label="El. paštas"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Slaptažodis"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Atšaukti
                </Button>
                <Button onClick={handleLogin} color="primary">
                    Prisijungti
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginModal;
