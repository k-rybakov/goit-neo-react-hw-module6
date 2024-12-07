import css from "./SearchBox.module.css";

export default function SearchBox({ value, filterHandler }) {
  return (
    <div className={css.searchbox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => filterHandler(e.target.value)}
      />
    </div>
  );
}
