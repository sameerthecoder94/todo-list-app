import './MainSection.css';

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
          <div className='task__container'>
            <div className='task__items'>
              <input className='task__checkbox' type='checkbox' />
              <p className='task__name'>Get a new helmet</p>
              <div className='task__category'>
                <p className='task__category-title'>Un-categorized</p>
              </div>
            </div>

            <p className='task__delete-icon'>
              <svg
                className='trash__delete-icon-svg'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </p>
          </div>

          <div className='task__container'>
            <div className='task__items'>
              <input className='task__checkbox' type='checkbox' />
              <p className='task__name'>Get a new helmet</p>
              <div className='task__category'>
                <p className='task__category-title'>Un-categorized</p>
              </div>
            </div>

            <p className='task__delete-icon'>
              <svg
                className='trash__delete-icon-svg'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </p>
          </div>

          <div className='task__container'>
            <div className='task__items'>
              <input className='task__checkbox' type='checkbox' />
              <p className='task__name'>Get a new helmet</p>
              <div className='task__category'>
                <p className='task__category-title'>Un-categorized</p>
              </div>
            </div>

            <p className='task__delete-icon'>
              <svg
                className='trash__delete-icon-svg'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </p>
          </div>

          <div className='task__container'>
            <div className='task__items'>
              <input className='task__checkbox' type='checkbox' />
              <p className='task__name'>Get a new helmet</p>
              <div className='task__category'>
                <p className='task__category-title'>Un-categorized</p>
              </div>
            </div>

            <p className='task__delete-icon'>
              <svg
                className='trash__delete-icon-svg'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </p>
          </div>

          <div className='task__container'>
            <div className='task__items'>
              <input className='task__checkbox' type='checkbox' />
              <p className='task__name'>Get a new helmet</p>
              <div className='task__category'>
                <p className='task__category-title'>Un-categorized</p>
              </div>
            </div>

            <p className='task__delete-icon'>
              <svg
                className='trash__delete-icon-svg'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
