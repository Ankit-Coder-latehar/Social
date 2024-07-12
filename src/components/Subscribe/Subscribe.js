
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const Subscribe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8q0pmeo',
      'template_k0yhq0s',
      e.target,
      'rPTUj4nOHNlBsvy5w'
    )
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });

    e.target.reset();
  };

  return (
    <Container>
      <Box 
        sx={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          backgroundColor: '#f5f5f5', 
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Subscribe to our Newsletter
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            onChange={handleChange}
            required
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
          >
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Subscribe;
