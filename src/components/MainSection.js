import { useState } from 'react';
import { tasks, categories } from '../data';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import './MainSection.css';

const MainSection = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tasksList, setTasksList] = useState(tasks);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function addTodoItem(e) {
    // console.log('Adding todo item');
    const newTask = {
      title: inputValue,
      category: selectedCategory,
      id: uuidv4(),
    };

    const updatedTasks = [...tasksList, newTask];
    setTasksList(updatedTasks);
    setInputValue(''); // clearing the input field
    setSelectedCategory(''); // clearing the category selection
  }

  return (
    <div className='main-section'>
      <div className='main__container'>
        <h1>All Tasks</h1>

        <div>
          <input
            className='task__input'
            type='text'
            placeholder="Add a new task inside 'All' category"
            value={inputValue}
            onChange={handleInputChange}
          />
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option>Select-Category</option>
            {categories.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
          </select>
          <button onClick={addTodoItem}>Add Task</button>
        </div>

        <div className='task__list'>
          {tasksList.map((task) => (
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
