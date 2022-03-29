import './MainSection.css';

import TodoItem from './TodoItem';

const tasks = [
  {
    title: 'Read Atomic Habits',
    category: 'Books',
    id: '1',
  },
  {
    title: 'Practice React Code',
    category: 'Learning',
    id: '2',
  },
  {
    title: 'Visit granny house',
    category: 'Others',
    id: '3',
  },
];
const MainSection = () => {
  return (
    <div className='main-section'>
      <div className='main__container'>
        <h1>All Tasks</h1>
        <input
          className='task__input'
          type='text'
          placeholder="Add a new task inside 'All' category"
        />
        <div className='task__list'>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              title={task.title}
              category={task.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
