import Features from "./Features";
import SearchBar from "./SearchBar";

function SideBar() {
  return (
    <div className="position-fixed vh-100 p-3 bg-info text-dark" style={{width:"24%"}}>
      <h1 className="text-center">GastroBook</h1>
      <div className="mt-5">
        <SearchBar />
      </div>
      <Features />
    </div>
  );
}

export default SideBar;
