// src/components/CreateActivity.js
import React, { useState, useContext } from 'react';
import { ActivitiesContext } from '../context/ActivitiesProvider';

const CreateActivity = () => {
  const [newActivity, setNewActivity] = useState('');
  const { addActivity } = useContext(ActivitiesContext);

  const handleSubmit = () => {
    if (newActivity.trim()) {
      addActivity(newActivity);
      setNewActivity('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={newActivity} 
        onChange={(e) => setNewActivity(e.target.value)} 
      />
      <button onClick={handleSubmit}>Add Activity</button>
    </div>
  );
};

export default CreateActivity;
