const routes = {
	'#/': 'home-component',
	'#/fooditems': 'fooditems-component',
	'#/clients': 'clients-component',
	'#/orders': 'orders-component',
	'#/reports': 'reports-component',
};

document.addEventListener('DOMContentLoaded', () => {
	// Create an instance of LayoutComponent and pass the routes object
	const layoutComponent = new LayoutComponent(routes);
	document.getElementById('app').appendChild(layoutComponent);

	window.addEventListener('hashchange', () => {
		layoutComponent.navigateTo(window.location.hash);
	});

	layoutComponent.navigateTo(window.location.hash || '#/');
});
