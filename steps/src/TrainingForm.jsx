import React, { useState, useEffect } from 'react';

// В TrainingForm добавляем props для начальных значений
const TrainingForm = ({ onAdd, initialDate = '', initialDistance = '', onClear }) => {
    const [date, setDate] = useState(initialDate);
    const [distance, setDistance] = useState(initialDistance);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd(date, distance);
      onClear(); // Очищаем форму после отправки
    };
  
    // Обновляем useEffect, чтобы он реагировал на изменение initialDate и initialDistance
    useEffect(() => {
      setDate(initialDate);
      setDistance(initialDistance);
    }, [initialDate, initialDistance]);
  
    return (
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Дата (дд.мм.гг)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Пройдено км"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />
      <button type="submit">ОК</button>
      </form>
    );
  };
  
export default TrainingForm