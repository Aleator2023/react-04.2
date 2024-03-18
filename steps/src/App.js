import React, { useState } from 'react';
import TrainingForm from './TrainingForm';
import TrainingTable from './TrainingTable';

const App = () => {
  const [trainings, setTrainings] = useState([]);
  const [editing, setEditing] = useState({ isEditing: false, index: null, date: '', distance: '' });

  const addTraining = (date, distance) => {
    const newDistance = Number(distance);
    const index = trainings.findIndex(t => t.date === date);
      
    if (index >= 0) { // Если тренировка с такой датой уже существует
      const updatedTrainings = trainings.map((training, i) => 
        i === index ? { ...training, distance: newDistance } : training // Замените на newDistance
      );
      setTrainings(updatedTrainings);
    } else { // Добавление новой тренировки
      const newTraining = { date, distance: newDistance };
      const sortedTrainings = [...trainings, newTraining].sort((a, b) => 
        new Date(a.date.split('.').reverse().join('/')) - new Date(b.date.split('.').reverse().join('/'))
      );
      setTrainings(sortedTrainings);
    }
  };
  
  const deleteTraining = (index) => {
    const updatedTrainings = [...trainings];
    updatedTrainings.splice(index, 1);
    setTrainings(updatedTrainings);
  };

  const editTraining = (index) => {
    const training = trainings[index];
    setEditing({ isEditing: true, index, date: training.date, distance: training.distance.toString() });
  };

  return (
    <div>
      <TrainingForm
        onAdd={addTraining}
        initialDate={editing.date}
        initialDistance={editing.distance}
        onClear={() => setEditing({ isEditing: false, index: null, date: '', distance: '' })}
      />
      <TrainingTable trainings={trainings} onDelete={deleteTraining} onEdit={editTraining} />
    </div>
  );
};

export default App;
