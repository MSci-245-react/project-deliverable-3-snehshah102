import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ReviewPage from './Review' 

const Review = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/" color="inherit">Landing</Button>
          <Button component={Link} to="/search" color="inherit">Search</Button>
          <Button component={Link} to="/review" color="inherit">Review</Button>
          <Button component={Link} to="/mypage" color="inherit">My Page</Button>
        </Toolbar>
      </AppBar>
      <ReviewPage/>
    </>
  );
};

export default Review;
