import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const BlogForm = () => {
    const { id } = useParams<{ id?: string }>();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`/api/articles/${id}`)
        .then((response) => {
          setTitle(response.data.title);
          setContent(response.data.content);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [id]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestData = { title, content };

    if (id) {
        axios.put(`/api/articles/${id}`, requestData)
            .then(() => {
                alert('Article updated successfully!');
                navigate(`/Blog/${id}`);
            })
            .catch((error) => {
                console.error("There was an error updating the article!", error);
            });
    } else {
        axios.post(`/api/articles`, requestData)
            .then(() => {
                alert('Article created successfully!');
                navigate('/');
            })
            .catch((error) => {
                console.error("There was an error creating the article!", error);
            });
    }
};

  return (
    <>
        <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
        noValidate
        autoComplete="off"
        >
            <TextField 
                id="standard-basic" 
                label="Title" 
                variant="standard" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit">Register</Button>
            <Button variant="outlined">Cancel</Button>
        </Stack>
        </Box>
    </>
  );
}

export default BlogForm;
