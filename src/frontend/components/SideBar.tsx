import Features from "./Features";
import SearchBar from "./SearchBar";

function SideBar() {
  return (
    <>
      <div className="vh-100 w-25 p-3 mb-2 bg-info text-dark">
        <h1 className="text-center">GastroBook</h1>
        <div className="mt-5">
          <SearchBar />
        </div>
        <Features />    
      </div>
    </>
  );
}

export default SideBar;
