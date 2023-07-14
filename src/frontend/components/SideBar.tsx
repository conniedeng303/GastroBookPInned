import Features from "./FeaturesComponent/Features";
import SearchBar from "./SearchBar";

function SideBar() {
  return (
    <div className="position-fixed vh-100 p-3 bg-info text-dark" style={{width:'24vw'}}>
      <h1 className="text-center" style={{fontSize:'4vh'}}>GastroBook</h1>
      <div className="mt-5">
        <SearchBar />
      </div>
      <Features />
    </div>
  );
}

export default SideBar;
