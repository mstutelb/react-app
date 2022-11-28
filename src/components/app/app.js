import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: 'John',
          salary: 1000,
          increase: true,
        },
        {
          id: 2,
          name: 'Anna',
          salary: 2000,
        },
        {
          id: 3,
          name: 'Bob',
          salary: 30001,
        },
      ],
    };

    this.nextId = 4;
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((item) => item.id !== id);
      return {
        data: newData,
      };
    });
  };

  onAddEmployer = (employer) => {
    console.log('employer', employer);
    const modifyEmployer = { ...employer, id: this.nextId++ };
    this.setState(({ data }) => {
      return {
        data: data.concat(modifyEmployer),
      };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.onDelete} />
        <EmployeesAddForm onAddEmployer={this.onAddEmployer} />
      </div>
    );
  }
}

export default App;
