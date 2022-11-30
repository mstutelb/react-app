import './search-panel.css';

const SearchPanel = ({ onSearchChange, query }) => {
  const onChange = (evt) => {
    onSearchChange(evt.target.value);
  };
  return (
    <input
      type="text"
      value={query}
      className="form-control search-input"
      placeholder="Найти сотрудника"
      onChange={onChange}
    />
  );
};

export default SearchPanel;
