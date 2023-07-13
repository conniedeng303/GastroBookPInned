import HomeLogo from "../../assets/home.svg";
import DiscoverLogo from "../../assets/compass.svg";
import CookbookLogo from "../../assets/cookbook.svg";
import FavoriteLogo from "../../assets/heart.svg";
import "./Features.css";

interface Logos {
  image: string;
  name: string;
}

function Features() {
  const logos: Logos[] = [
    { image: HomeLogo, name: "Home" },
    { image: DiscoverLogo, name: "Discover" },
    { image: CookbookLogo, name: "Cookbook" },
    { image: FavoriteLogo, name: "Favorites" }
  ];

  const test = (logoName: string) => () => {
    console.log("Clicked on " + logoName);
  };

  return (
    <nav className="nav flex-column nav-fills ">
      {logos.map(({image, name}: Logos) => (
        <a
          className="nav-link active"
          key={name}
          onClick={test(name)}
        >
          <img
            src={image}
            height="10%"
            width="10%"
            className="d-inline-block align-middle"
            alt=""
          />
          &emsp;{name}
        </a>
      ))}
      ;
    </nav>
  );
}

export default Features;
