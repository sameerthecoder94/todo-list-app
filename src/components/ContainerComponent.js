import './Container.css';
import MainSection from './MainSection';
import Sidebar from './Sidebar';

const ContainerComponent = () => {
  return (
    <div className='container'>
      <Sidebar />
      <MainSection />
    </div>
  );
};

export default ContainerComponent;
