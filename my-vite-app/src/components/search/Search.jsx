import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Search = (props) => {
  return (
    <form id="form" className="search" onSubmit={props.handleSubmit()}>
      <input
        className="search__input"
        name="input"
        placeholder="search... "
        required
      ></input>

      <Button variant="contained" className="search__button" type="submit">
        click to search
      </Button>

      {/* <select
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
      </select> */}
      <InputLabel>Sort</InputLabel>
      <Select defaultValue="" onChange={props.handleSort()}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Newest">Newest</MenuItem>
        <MenuItem value="Oldest">Oldest</MenuItem>
        <MenuItem value="Highest Rating">Highest Rating</MenuItem>
        <MenuItem value="Lowest Rating">Lowest Rating</MenuItem>
      </Select>
    </form>
  );
};

export default Search;
