import Button from "@mui/material/Button";
import "./CurrentlyReadingCard.scss";

const CurrentlyReadingCard = ({ data, displayBook, addtoReading }) => {
  return (
    <div>
      <div className="currentbook__image-container">
        <img
          onClick={() => displayBook(data)}
          className="currentbook__image"
          src={data.image}
        />
      </div>
      <div className="currentbook__button-container">
        <Button
          className="currentbook__button--currently"
          onClick={() => addtoReading(data)}
          variant="contained"
        >
          Read
        </Button>
      </div>
    </div>
  );
};

export default CurrentlyReadingCard;
