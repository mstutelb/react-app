import './app-info.css';

const AppInfo = ({ employersNumber, goodEmployers }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employersNumber}</h2>
      <h2>Премию получат: {goodEmployers}</h2>
    </div>
  );
};

export default AppInfo;
