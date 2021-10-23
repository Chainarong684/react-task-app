import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  const [tasksData, setTasksData] = useState([
    {
        id: 1,
        text: 'Coder',
        day: '02/03/2021',
        reminder: true
    },
    {
        id: 2,
        text: 'Reader',
        day: '05/03/2021',
        reminder: true
    },
    {
        id: 3,
        text: 'Workout',
        day: '07/03/2021',
        reminder: true
    },
  ])
  

  return (
    <div>
      <Header title='Hi' />
      <Tasks tasks={ tasksData } />
    </div>
  )
}

export default App
