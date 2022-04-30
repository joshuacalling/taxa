import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "../css/EmailModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EmailModal() {
  const [open, setOpen] = React.useState(false);
  const [emailId, setEmailId] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: {
        subject: subject,
        body: body,
        emailId: emailId,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Email sent!");
      } else if (response.data.msg === "fail") {
        alert("Oops, something went wrong. Try again");
      }
    });
  };

  const handleEmailChange = (event) => {
    if (event.target.name === "subject") {
      setSubject(event.target.value);
    } else if (event.target.name === "body") {
      setBody(event.target.value);
    } else if (event.target.name === "emailId") {
      setEmailId(event.target.value);
    }
  };

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button onClick={handleOpen} variant="contained" endIcon={<SendIcon />}>
          Email Me
        </Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Construct Mail
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                id="outlined-multiline-static"
                label="Email ID"
                multiline
                rows={1}
                variant="outlined"
                value={emailId}
                name="emailId"
                onChange={handleEmailChange}
                className="emailText"
                size="small"
              />
              <TextField
                id="outlined-multiline-static"
                label="Subject"
                multiline
                rows={2}
                variant="outlined"
                value={subject}
                name="subject"
                onChange={handleEmailChange}
                className="emailText"
              />
              <TextField
                id="outlined-multiline-static"
                label="Body"
                multiline
                rows={4}
                variant="outlined"
                value={body}
                name="body"
                onChange={handleEmailChange}
                className="emailText"
              />
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                onClick={handleClose}
                startIcon={<DeleteIcon />}
              >
                Discard
              </Button>
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Stack>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
