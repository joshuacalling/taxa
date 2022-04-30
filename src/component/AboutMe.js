import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function AboutMe() {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "#e3e0cf",
          padding: "10px",
          justifyContent: "center",
          ...commonStyles,
          borderRadius: "16px",
        }}
      >
        <Typography variant="h3">About Me</Typography>
        <Divider></Divider>
        <br></br>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          auctor elit sed vulputate mi sit amet. Massa vitae tortor condimentum
          lacinia quis vel eros donec ac. Odio tempor orci dapibus ultrices in
          iaculis nunc. Enim diam vulputate ut pharetra sit. Fringilla est
          ullamcorper eget nulla. Vestibulum rhoncus est pellentesque elit. Hac
          habitasse platea dictumst quisque sagittis purus sit. Lacinia at quis
          risus sed vulputate. Diam vulputate ut pharetra sit amet aliquam id
          diam maecenas. Cursus in hac habitasse platea dictumst. Nec sagittis
          aliquam malesuada bibendum. Vulputate dignissim suspendisse in est
          ante in nibh mauris cursus. Orci phasellus egestas tellus rutrum
          tellus pellentesque eu. Eget nullam non nisi est sit amet. Vel quam
          elementum pulvinar etiam non quam lacus suspendisse. Est ullamcorper
          eget nulla facilisi. Ultricies mi quis hendrerit dolor. Laoreet id
          donec ultrices tincidunt arcu non. Volutpat est velit egestas dui id
          ornare arcu odio ut. Venenatis lectus magna fringilla urna porttitor
          rhoncus dolor. Sagittis purus sit amet volutpat consequat. Cursus
          vitae congue mauris rhoncus aenean vel elit scelerisque mauris. In
          arcu cursus euismod quis viverra nibh cras pulvinar. Mattis enim ut
          tellus elementum sagittis vitae et leo duis.
        </Typography>
      </Box>
    </Container>
  );
}

const commonStyles = {
  borderColor: "text.primary",
  m: 1,
  border: 1,
};
