/* eslint-disable jsx-a11y/anchor-is-valid */
import { categories } from '../data';
import './Sidebar.css';

const Sidebar = (props) => {
  const { selectedCategory, setSelectedCategory } = props;

  return (
    <div className='sidebar'>
      <div>
        <a
          onClick={() => setSelectedCategory('All')}
          className='sidebar__item'
        >
          All
        </a>

        {categories.map(function (category) {
          function handleSelectCategory() {
            setSelectedCategory(category.name);
          }

          return (
            <a
              key={category.id}
              onClick={handleSelectCategory}
              className='sidebar__item'
              style={{
                color:
                  selectedCategory === category.name
                    ? '#ea5959'
                    : '#525252',
              }}
            >
              {category.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
