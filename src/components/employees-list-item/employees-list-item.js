import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     increase: false,
  //     liked: false,
  //   };
  // }

  // onIncrease = () => {
  //   this.setState(({ increase }) => ({
  //     increase: !increase,
  //   }));
  // };

  // onLike = () => {
  //   this.setState(({ liked }) => ({
  //     liked: !liked,
  //   }));
  // };

  render() {
    const { id, name, salary, onDelete, increase, like, onToggleValue } = this.props;
    // const { increase, liked } = this.state;
    const itemClassList = ['list-group-item', 'd-flex', 'justify-content-between'];
    if (increase) itemClassList.push('increase');
    if (like) itemClassList.push('like');

    return (
      <li className={itemClassList.join(' ')}>
        <span
          onClick={() => {
            onToggleValue(id, 'like');
          }}
          className="list-group-item-label"
        >
          {name}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            onClick={() => {
              onToggleValue(id, 'increase');
            }}
            className="btn-cookie btn-sm "
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
