import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleValue }) => {
  const elements = data.map((item) => {
    // const { id, ...itemProps } = item;

    return (
      <EmployeesListItem key={item.id} {...item} onDelete={() => onDelete(item.id)} onToggleValue={onToggleValue} />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
