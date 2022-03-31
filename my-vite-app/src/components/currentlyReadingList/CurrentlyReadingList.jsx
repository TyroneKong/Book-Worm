// import RecommendedCard from "../recommendedCard/RecommendedCard";
// import CurrentlyReadingCard from "../currentlyReadingCard/currentlyReadingCard";

// const CurrentlyReadingList = ({
//   data,
//   recommended,
//   displayBookState,
//   displayBookfunc,
//   addToFinishedReading,
// }) => {
//   return (
//     <>
//       <div className="currentbook__main-heading">
//         <h1>Here are the books on your currently reading list</h1>
//       </div>
//       <p>There are {data.length} books in your list</p>
//       <div className="Main__container">
//         {data.map((item, index) => {
//           return (
//             <div className="currentbook" key={index}>
//               <CurrentlyReadingCard
//                 data={item}
//                 displayBook={() => displayBookfunc(item)}
//                 addtoReading={() => addToFinishedReading(item)}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <RecommendedCard
//         recommendedState={recommended}
//         displayedBookState={displayBookState}
//       />
//     </>
//   );
// };

// export default CurrentlyReadingList;
