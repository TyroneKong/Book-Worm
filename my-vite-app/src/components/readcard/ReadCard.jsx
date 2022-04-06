import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import "./ReadCard.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ReadCard = ({
  item,

  removeFromReads,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="readbook">
      <div className="readbook__container">
        <div className="readbook__info">
          <img className="readbook__image" src={item.image} />
        </div>

        <Modal
          className="readbook__modal"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              className="readbook__image-container"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <img className="readbook__modal-image" src={item.image}></img>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {item.description}
            </Typography>
            <div className="readbook__modal-buttons">
              <Button onClick={handleClose}>close</Button>
              <Button>Preview</Button>
            </div>
          </Box>
        </Modal>
      </div>

      <div className="readbook__description">
        <div className="readbook__booktitle">
          <h3>Title</h3>
          <p>{item.title}</p>
        </div>
        <div className="readbook__author">
          <h3>Author</h3>
          <p>{item.author}</p>
        </div>
        <div className="readbook__rating">
          <div>
            <h3>Rating</h3>
          </div>
          <Rating value={item.rating}></Rating>
        </div>
      </div>
      <div className="readbook__button-container">
        <Button
          variant="contained"
          className="readbook__button--delete"
          onClick={removeFromReads}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
      <div className="readbook__button-container">
        <Button onClick={handleOpen}>More details</Button>
      </div>
    </div>
  );
};

export default ReadCard;
