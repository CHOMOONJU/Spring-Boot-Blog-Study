import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Article {
    id: number;
    title: string;
    content: string;
  }

const List = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  const handleRowClick = (id: number) => {
    navigate(`/Blog/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((atc, index) => (
            <TableRow
              key={atc.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },
                    '&:hover': { cursor: 'pointer' } }}
              onClick={() => handleRowClick(atc.id)}
            >
              <TableCell component="th" scope="row">
                {atc.id}
              </TableCell>
              <TableCell align="right">{atc.title}</TableCell>
              <TableCell align="right">{atc.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
