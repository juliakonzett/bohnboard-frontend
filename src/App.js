import './App.css';
import Dashboard from './pages/Dashboard';
import { React, useState, useEffect } from 'react';
import { fetchData } from './utils/api';

function App() {
    const [beans, setBeans] = useState([]);

    useEffect(() => {
      const getBeans = async () => {
        const beanData = await fetchData();
        setBeans(beanData);
      };

      getBeans();
    }, []);

    console.log(beans.data);
  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}

export default App;
