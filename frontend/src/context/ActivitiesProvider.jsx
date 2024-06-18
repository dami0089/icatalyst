// src/context/ActivitiesProvider.js
import React, { createContext, useState } from 'react';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <ActivitiesContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
