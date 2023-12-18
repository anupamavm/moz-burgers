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
const food = async () => {
	const htmlContent = await fetchHtml('food.html');
	app.innerHTML = htmlContent;
};

const about = async () => {
	const htmlContent = await fetchHtml('about.html');
	app.innerHTML = htmlContent;
};
