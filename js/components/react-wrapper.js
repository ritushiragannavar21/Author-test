import React from 'react';
import { createRoot } from 'react-dom/client';
import JSON6 from 'json-6';

export default (Component, container, propsEl) => {
    console.log("---------react-------");
	//component is a pre-compiled class
	//container is where you want to inject component
	//propEl pass prop when injecting
	const appContainer = document.querySelectorAll(container);
	const singlePropsEl = document.querySelector(propsEl);
	let props = {};
	if(singlePropsEl) {
		props = JSON6.parse(singlePropsEl?.innerHTML) || {};
	}
	return [...appContainer].map(appTarget => {
		const initialized = appTarget.dataset.initialized || false;
		if (appTarget && !initialized) {
			if(!singlePropsEl) {
				if (propsEl) {
					props = {};
					props = JSON6.parse(appTarget.querySelector(propsEl)?.innerHTML) || {}; //get json from the script id 
				}
		   }
			appTarget.dataset.initialized = true;
			const root = createRoot(appTarget);
			root.render(<Component shopifyData={props} />);
			return root;
		}
	})
}