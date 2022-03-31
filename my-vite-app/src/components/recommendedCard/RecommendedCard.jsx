const RecommendedCard = ({ displayedBookState, recommendedState }) => {
  return (
    <>
      <div className="currentbook__displayedbook-container">
        <img
          className="currentbook__displayedbook"
          src={displayedBookState}
        ></img>
        <div>
          <img
            className="currentbook__displayedRecommendedbook"
            src={recommendedState}
          ></img>
        </div>
      </div>
    </>
  );
};

export default RecommendedCard;
