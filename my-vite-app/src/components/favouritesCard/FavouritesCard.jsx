import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./FavouritesCard.scss";
import Modal from "../modal/Modal";

const FavouriteCard = ({
  item,
  addToCurrentlyReading,
  removeFromFavourites,
  showModal,
}) => {
  return (
    <div className="favouritebook">
      <div className="favouritebook__container">
        <div className="favouritebook__info"></div>
        <a href={item.previewlink}>
          <img className="favouritebook__image" src={item.image} />
        </a>
        <button type="button" onClick={showModal}>
          more details
        </button>

        <div className="favouritebook__button-container">
          <AutoStoriesOutlinedIcon
            fontSize="small"
            className="favouritebook__button--currentlyReading"
            onClick={addToCurrentlyReading}
            variant="contained"
          />
          <DeleteOutlineOutlinedIcon
            fontSize="small"
            className="favouritebook__button--delete"
            onClick={removeFromFavourites}
          />
        </div>
      </div>

      <div className="favouritebook__description">
        <h3>Title</h3>
        <p>{item.title}</p>
        <h3>Author</h3>
        <p>{item.author}</p>
        <h3>Description</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default FavouriteCard;
