import "bootstrap/dist/css/bootstrap.css";
import SideBar from "./components/SideBar";
import FoodCard from "./components/FoodCardComponent/FoodCard";

interface RecipeFromAPI {
  name: string;
}
function App() {
  const recipe: RecipeFromAPI[] = [
    { name: "test1" }, 
    { name: "test2" },
    { name: "test3"},
    { name: "test4"},
    { name: "test5"}
  ];

  return (
    <div className="container-{}">
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md p-0">
          {recipe.map(({name} : RecipeFromAPI) => (
            <div className="row" key={name}>
              <FoodCard recipe={name} />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
