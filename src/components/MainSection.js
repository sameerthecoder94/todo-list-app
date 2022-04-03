/* eslint-disable no-lone-blocks */
import { useState } from 'react';
import { tasks, categories } from '../data';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import './MainSection.css';

const MainSection = (props) => {
  const { selectedCategory: selectedSidebarCategory } = props;
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tasksList, setTasksList] = useState(tasks);

  let filteredTasks = tasksList;

  if (selectedSidebarCategory !== null) {
    if (selectedSidebarCategory !== 'All') {
      filteredTasks = tasksList.filter(function (task) {
        if (task.category === selectedSidebarCategory) {
          return true;
        } else {
          return false;
        }
      });
    }
  }

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
      done: false,
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
          {filteredTasks.map((task) => {
            function toggleDone(e) {
              // map through the tasks and update the done property
              {
                /* const updatedTasks = tasksList.map((t) => {
                if (t.id === task.id) {
                  return {
                    ...t,
                    done: !t.done,
                  };
                } else {
                  return t;
                }
              });
              setTasksList(updatedTasks); */
              }

              // findIndex returns the index of the task in the tasksList array and update the done property  of the task at that index in the tasksList array  using the spread operator ... and the setTasksList function to update the tasksList array with the updated tasks array
              const taskIndex = tasksList.findIndex((t) =>
                t.id === task.id ? true : false
              );
              const updatedTasks = [...tasksList];
              updatedTasks[taskIndex].done = e.target.checked;
              setTasksList(updatedTasks);
            }

            return (
              <TodoItem
                key={task.id}
                title={task.title}
                category={task.category}
                done={task.done}
                toggleDone={toggleDone}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
