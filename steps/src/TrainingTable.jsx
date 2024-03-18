const TrainingTable = ({ trainings, onDelete, onEdit }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Дата (дд.мм.гг)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {trainings.map((training, index) => (
            <tr key={index}>
              <td>{training.date}</td>
              <td>{training.distance}</td>
              <td>
                <button onClick={() => onEdit(index)}>✎</button>
                <button onClick={() => onDelete(index)}>✘</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TrainingTable