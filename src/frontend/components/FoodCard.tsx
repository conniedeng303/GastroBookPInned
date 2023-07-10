// import TimeLogo from "../assets/time_card.svg"
interface Recipe {
  recipe: string;
  image?: string;
  name?: string;
}

function FoodCard({ recipe }: Recipe) {
  //   const FoodPics: FoodPics[] = [
  //     {image: TimeLogo, name: "TimeLogo"}
  // ]

  return (
    <div className="card m-2" style={{ width: "97%", height: "300px"}}>
      <div className="card_body">
        {/* <img
          className="card-img-top"
          src="https://www.howtogame.net/wp-content/uploads/2023/05/how-tall-is-link-totk-1024x576.jpg"
          alt=""
        /> */}
        <h2 className="card__description"></h2>
        <p className="card__description">description of card {recipe}</p>
      </div>
      <button className="card__bttn">View Recipe {recipe}</button>
    </div>
  );
}

export default FoodCard;
