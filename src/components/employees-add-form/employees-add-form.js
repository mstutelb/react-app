import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  resetState = () => {
    this.setState({
      name: '',
      salary: '',
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const { onAddEmployer } = this.props;
    const { name, salary } = this.state;

    if (!name || !salary) return;

    onAddEmployer({
      name,
      salary,
    });

    this.resetState();
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
            className="form-control new-post-label"
            placeholder="З/П в $?"
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
