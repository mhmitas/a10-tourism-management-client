import React, { createContext } from 'react';

export const TouristSpotsContext = createContext(null)

const TouristSpotsProvider = ({ children }) => {
    // const serverLink = 'http://localhost:5000';
    const serverLink = 'https://tourism-management-project.vercel.app';

    const spotsInfo = { serverLink }
    return (
        <TouristSpotsContext.Provider value={spotsInfo}>
            {children}
        </TouristSpotsContext.Provider>
    );
};

export default TouristSpotsProvider;