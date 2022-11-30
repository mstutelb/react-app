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
          like: true,
        },
        {
          id: 2,
          name: 'Anna',
          salary: 2000,
          increase: false,
          like: false,
        },
        {
          id: 3,
          name: 'Bob',
          salary: 30001,
          increase: false,
          like: false,
        },
      ],

      query: '',
      filterTab: 'all',
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
    const modifyEmployer = { ...employer, id: this.nextId++ };
    this.setState(({ data }) => {
      return {
        data: data.concat(modifyEmployer),
      };
    });
  };

  onToggleValue = (id, field) => {
    console.log(id, field);
    this.setState(({ data }) => {
      const newData = data.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: !item[field] };
        }

        return item;
      });

      return { data: newData };
    });
  };

  onSearchChange = (query) => {
    this.setState({ query });
  };

  onFilterTabChange = (filterTab) => {
    this.setState({ filterTab });
  };

  filterByTab = (data, filterTab) => {
    const HIGH_SALARY = 1000;
    if (filterTab === 'increase') return data.filter((item) => item.increase);
    if (filterTab === 'high') return data.filter((item) => item.salary > HIGH_SALARY);
    return data;
  };

  filterData = ({ data, query, filterTab }) => {
    const filteredByTabs = this.filterByTab(data, filterTab);
    if (!query) return filteredByTabs;
    return filteredByTabs.filter((item) => {
      return item.name.toLowerCase().includes(query);
    });
  };

  render() {
    const { data, query, filterTab } = this.state;
    const employersNumber = data.length;
    const goodEmployers = data.filter((item) => item.increase).length;
    const filteredData = this.filterData({ data, query, filterTab });
    return (
      <div className="app">
        <AppInfo employersNumber={employersNumber} goodEmployers={goodEmployers} />

        <div className="search-panel">
          <SearchPanel onSearchChange={this.onSearchChange} query={query} />
          <AppFilter filterTab={filterTab} onFilterTabChange={this.onFilterTabChange} />
        </div>

        <EmployeesList data={filteredData} onDelete={this.onDelete} onToggleValue={this.onToggleValue} />
        <EmployeesAddForm onAddEmployer={this.onAddEmployer} />
      </div>
    );
  }
}

export default App;
