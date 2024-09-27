import React from 'react'
import List from '../components/List'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
            navigate(`/BlogForm`);
        
        };
    return (
        <>
            <List />
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={handleRegister}>New</Button>
            </Stack>
        </>
    )
}

export default Home
