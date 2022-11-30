import './app-filter.css';

const tabList = [
  { slug: 'all', text: 'Все сотрудники' },
  { slug: 'increase', text: 'На повышение' },
  { slug: 'high', text: 'З/П больше 1000$' },
];

const AppFilter = ({ filterTab, onFilterTabChange }) => {
  const onButtonClick = (tab) => () => {
    onFilterTabChange(tab);
  };

  const elements = tabList.map((item) => {
    const classList = ['btn'];
    if (item.slug === filterTab) {
      classList.push('btn-light');
    } else {
      classList.push('btn-outline-light');
    }
    return (
      <button key={item.slug} onClick={onButtonClick(item.slug)} type="button" className={classList.join(' ')}>
        {item.text}
      </button>
    );
  });

  return <div className="btn-group">{elements}</div>;
};

export default AppFilter;
