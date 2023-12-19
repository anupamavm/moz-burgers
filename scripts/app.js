'use strict';

const app = document.getElementById('app');
const mainNavBar = document.getElementsByClassName('mainNavBar');

const fetchHtml = async (file) => {
	try {
		const response = await fetch(file);
		if (!response.ok) {
			throw new Error(`Failed to fetch HTML: ${response.status}`);
		}
		return await response.text();
	} catch (error) {
		console.error(error);
	}
};

const home = async () => {
	const htmlContent = await fetchHtml('home.html');
	app.innerHTML = htmlContent;
};

const foods = async () => {
	const htmlContent = await fetchHtml('food.html');
	app.innerHTML = htmlContent;
};

const customers = async () => {
	const htmlContent = await fetchHtml('customers.html');
	app.innerHTML = htmlContent;
};

const orders = async () => {
	const htmlContent = await fetchHtml('orders.html');
	app.innerHTML = htmlContent;
};

const reports = async () => {
	const htmlContent = await fetchHtml('reports.html');
	app.innerHTML = htmlContent;
};

// load the home to the app div when loading

// // Function to execute when the #app div is added
// function handleAppDiv(element) {
// 	console.log('#app div added:', element);
// 	home(); // Call the home function
// }

// // Create an observer instance linked to the callback function
// const observer = new MutationObserver((mutations) => {
// 	mutations.forEach((mutation) => {
// 		mutation.addedNodes.forEach((node) => {
// 			if (node.nodeType === Node.ELEMENT_NODE && node.id === 'app') {
// 				handleAppDiv(node);
// 			}
// 		});
// 	});
// });

// // Start observing the target node for configured mutations
// observer.observe(document.body, {
// 	childList: true, // Set to true if you want to watch for additions/removals of child elements
// 	subtree: true, // Set to true if you want to watch for changes in the entire subtree, not just direct children
// });

// // If you want to stop observing later
// // observer.disconnect();
