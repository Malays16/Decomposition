const SearchInput = () => {
  return (
    <div className="search-input">
      <input id="search-input-query" type="text" placeholder="Поиск" />
      <input id="search-input-submit" type="submit" value="Найти" />
    </div>
  );
};

export default SearchInput;