import React, { createContext } from 'react';

export const TouristSpotsContext = createContext(null)

const TouristSpotsProvider = ({ children }) => {
    // const serverLink = 'http://localhost:5000';
    // const serverLink = 'https://tourism-management-project-6m7e6ruub-mh-mitas-projects.vercel.app/tourist-spots';
    const serverLink = 'https://tourism-management-project.vercel.app';
    const spotsInfo = { serverLink }
    return (
        <TouristSpotsContext.Provider value={spotsInfo}>
            {children}
        </TouristSpotsContext.Provider>
    );
};

export default TouristSpotsProvider;