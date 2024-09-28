import React, { createContext, useContext, useState } from 'react';

const WpAuthContext = createContext();

export function WpAuthProvider({ children }) {

    const [wpAuthToken, setWpAuthToken] = useState("");

	const values = { wpAuthToken, setWpAuthToken };

	return (
		<WpAuthContext.Provider value={values}>
			{children}
		</WpAuthContext.Provider>
	);
}

export function useWpAuth() { return useContext(WpAuthContext); }




