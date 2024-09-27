import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Article {
    id: number;
    title: string;
    content: string;
  }

const Blog = () => {
    const [article, setArticle] = useState<Article | null>(null);
    const { id } = useParams<{ id: string }>();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
    setOpen(false);
    };

    const handleDelete = () => {
    if (id) {
        axios.delete(`/api/articles/${id}`)
        .then(() => {
            console.log("Article deleted successfully");
            navigate("/");
        })
        .catch((error) => {
            console.error("There was an error deleting the article!", error);
        });
    }
    };

    const handleModify = () => {
    if (id) {
        navigate(`/BlogForm/${id}`);
    }
    };

    useEffect(() => {
        if (id) {
          axios.get(`/api/articles/${id}`)
            .then((response) => {
              setArticle(response.data);
            })
            .catch((error) => {
              console.error("There was an error fetching the data!", error);
            });
        }
      }, [id]);

  return (
    <>
        <div>
            {article ? (
                <div>
                <h1>{article.title}</h1>
                <p>{article.content}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={handleModify}>Modify</Button>
            <Button variant="outlined" onClick={handleClickOpen}>Delete</Button>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleDelete} autoFocus>
                Agree
            </Button>
            </DialogActions>
        </Dialog>
        </Stack>
    </>
  )
}

export default Blog
