import { useState, ChangeEvent, FormEvent } from "react";

function SearchBar() {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const clearSearch = () => {
    setInputVal("");
  };

  const getInputVal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputVal.trim() !== "") {
      console.log(inputVal);
    }
  };

  return (
    <form className="d-flex" onSubmit={getInputVal}>
      <input
        className="form-control me-2"
        type="search"
        value={inputVal}
        onChange={handleChange}
        onClick={clearSearch}
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
