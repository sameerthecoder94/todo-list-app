import { useState } from 'react';
import MainSection from './MainSection';
import Sidebar from './Sidebar';
import './Container.css';

const ContainerComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className='container'>
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MainSection selectedCategory={selectedCategory} />
    </div>
  );
};

export default ContainerComponent;
