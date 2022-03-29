import { categories } from '../data';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div>
        <p className='sidebar__item'>All</p>
        {categories.map((category) => (
          <p key={category.id} className='sidebar__item'>
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
