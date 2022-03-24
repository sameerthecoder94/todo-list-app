import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div>
        <p className='sidebar__item'>All</p>
        <p className='sidebar__item'>Groceries</p>
        <p className='sidebar__item'>Payments</p>
        <p className='sidebar__item'>College</p>
      </div>
    </div>
  );
};

export default Sidebar;
