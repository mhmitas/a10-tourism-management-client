import React, { createContext } from 'react';

export const TouristSpotsContext = createContext(null)

const TouristSpotsProvider = ({ children }) => {
    const spotsInfo = {}
    return (
        <TouristSpotsContext.Provider value={spotsInfo}>
            {children}
        </TouristSpotsContext.Provider>
    );
};

export default TouristSpotsProvider;