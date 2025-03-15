import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const searchFieldId = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchField}>
      <label name="search" id={searchFieldId} htmlFor={searchFieldId}>
        Find contact by name
      </label>
      <input
        type="text"
        name="search"
        id={searchFieldId}
        value={filter}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
}

export default SearchBox;
