const RecommendedCard = ({ displayedBookState, recommendedState }) => {
  return (
    <>
      <div className="currentbook__displayedbook-container">
        <div>
          <div>
            <h2 className="currentbook__displaybook-main">Main Book</h2>
          </div>
          <img
            className="currentbook__displayedbook"
            src={displayedBookState}
          ></img>
        </div>

        <div>
          <div>
            <h2 className="currentbook__displayedbook">Similar Books</h2>
          </div>

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
