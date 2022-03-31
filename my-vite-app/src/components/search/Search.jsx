const Search = (props) => {
  return (
    <form id="form" className="search" onSubmit={props.handleSubmit()}>
      <input
        className="search__input"
        name="input"
        placeholder="search... "
        required
      ></input>

      <button className="search__button" type="submit">
        click to search
      </button>

      <select
        onChange={props.handleSort()}
        defaultValue="Sort"
        className="search__dropdown"
      >
        <option disabled value="Sort" className="search__dropdown-options">
          Sort
        </option>
        <option className="search__dropdown-options">Newest</option>
        <option className="search__dropdown-options">Oldest</option>
        <option className="search__dropdown-options">Highest Rating</option>
        <option className="search__dropdown-options">Lowest Rating</option>
      </select>
    </form>
  );
};

export default Search;
