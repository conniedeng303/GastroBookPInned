import { useState, ChangeEvent, MouseEvent } from 'react'

function SearchBar() {
  const [inputVal, setInputVal] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const clearSearch = () => {
    setInputVal('');
  }

  const getVal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(inputVal);
  }

  return (
    <>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          value={inputVal}
          onChange={handleChange}
          onClick={clearSearch}
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={getVal}
        >
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
