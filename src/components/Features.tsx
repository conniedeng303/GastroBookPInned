import HomeLogo from "../assets/home.svg";
import DiscoverLogo from "../assets/compass.svg";
import CookbookLogo from "../assets/cookbook.svg";
import FavoriteLogo from "../assets/heart.svg";
import "../Features.css";

interface Logos {
  image: string;
  name: string;
}

function Features() {
  const logos: Logos[] = [
    { image: HomeLogo, name: "Home" },
    { image: DiscoverLogo, name: "Discover" },
    { image: CookbookLogo, name: "Cookbook" },
    { image: FavoriteLogo, name: "Favorites" },
  ];
  const test = (logoName:string) => () => {
    console.log("Clicked on " + logoName);
  }

  return (
    <>
      <nav className="nav flex-column nav-fills ">
        {logos.map((logo) => (
          <a className="nav-link active" onClick={test(logo.name)}>
            <img
              src={logo.image}
              height="60"
              width="60"
              className="d-inline-block align-middle"
              alt=""
            />
            &emsp;{logo.name}
          </a>
        ))};
      </nav>
    </>
  );
}

export default Features;
