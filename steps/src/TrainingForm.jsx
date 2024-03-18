import React, { useState, useEffect } from 'react';

// Функции для преобразования форматов даты
const toInternalDate = (dateString) => {
  const [day, month, year] = dateString.split('.').map(Number);
  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
};

const toExternalDate = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
};

const TrainingForm = ({ onAdd, initialDate = '', initialDistance = '', onClear }) => {
    const [date, setDate] = useState(initialDate ? toInternalDate(initialDate) : '');
    const [distance, setDistance] = useState(initialDistance);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd(toExternalDate(date), distance); // Преобразуем дату обратно во внешний формат перед добавлением
      onClear(); // Очищаем форму после отправки
    };
  
    useEffect(() => {
      setDate(initialDate ? toInternalDate(initialDate) : '');
      setDistance(initialDistance);
    }, [initialDate, initialDistance]);
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="date"
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

export default TrainingForm;
