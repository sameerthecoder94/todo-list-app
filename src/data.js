import { v4 as uuidv4 } from 'uuid';

export const tasks = [
  {
    title: 'Read Atomic Habits',
    category: 'Books',
    id: uuidv4(),
  },
  {
    title: 'Practice React Code',
    category: 'Learning',
    id: uuidv4(),
  },
  {
    title: 'Visit granny house',
    category: 'Others',
    id: uuidv4(),
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
