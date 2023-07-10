// import TimeLogo from "../assets/time_card.svg"


// interface FoodPics {
//   image: string;
//   name: string;
// }


function FoodCard() {

//   const FoodPics: FoodPics[] = [
//     {image: TimeLogo, name: "TimeLogo"}
  // ]


  return (
    <>
      <div className = "card">
        <div className = "card_body">
          {/* <img className = "card-img-top" 
            src = "https://www.howtogame.net/wp-content/uploads/2023/05/how-tall-is-link-totk-1024x576.jpg"
            alt = "" */}
          {/* /> */}
          <h2 className = "card__description"></h2>
          <p className = "card__description">description of card</p>
        </div>
        <button className = "card__bttn">View Recipe</button>
      </div>
    </>
  );
}

export default FoodCard;
