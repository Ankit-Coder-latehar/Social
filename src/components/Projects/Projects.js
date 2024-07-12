
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, CardActions } from '@mui/material';
import { Zoom } from 'react-reveal';

const projects = [
  {
    title: "Web Developemnt",
    description: "This is a brief description of Project One.",
    imageUrl: "https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383",
    link: "#"
  },
  {
    title: "Logo Design Project",
    description: "This is a brief description of Project Two.",
    imageUrl: "https://s.cafebazaar.ir/images/icons/com.logomaster.createlogo.makelogo.designer.canvafree-856163d2-8d59-4c64-a9b2-4d67c20bcdbe_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize",
    link: "#"
  },
  {
    title: "Graphics Design Project",
    description: "This is a brief description of Project Two.",
    imageUrl: "https://wallpapers.com/blog/wp-content/uploads/2024/03/How-to-Incorporate-PNG-Images-into-Your-Graphic-Design-Projects.jpg",
    link: "#"
  },
  
];

const Projects = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Zoom>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={project.link}>
                    View Projects
                  </Button>
                </CardActions>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
