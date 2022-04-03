import { v4 as uuidv4 } from 'uuid';

export const tasks = [
  {
    title: 'Read Atomic Habits',
    category: 'Books',
    id: uuidv4(),
    done: false,
  },
  {
    title: 'Practice React Code',
    category: 'Learning',
    id: uuidv4(),
    done: false,
  },
  {
    title: 'Visit granny house',
    category: 'Others',
    id: uuidv4(),
    done: false,
  },
];

export const categories = [
  {
    name: 'Groceries',
    id: uuidv4(),
  },
  {
    name: 'Payments',
    id: uuidv4(),
  },
  {
    name: 'College',
    id: uuidv4(),
  },
  {
    name: 'Books',
    id: uuidv4(),
  },
  {
    name: 'Others',
    id: uuidv4(),
  },
];
