class FoodCard extends HTMLElement {
	constructor(routes) {
		super();
		this.routes = routes;
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
		<style>
			/* Add your layout-specific styles here */
			/* Use Bootstrap classes here */
			.navbar {
				background-color: #e3f2fd;
			}

			.navbar h1 {
				color: #2196f3;
			}

			.content-container {
				padding: 20px;
			}
		</style>
		<nav class="navbar">
			<h1>Food Card</h1>
		</nav>
		<div class="content-container" id="content"></div>
	`;
		// Continue with your event listeners and navigation logic
	}

	navigateTo(route) {
		window.location.hash = route;
		this.renderContent(route);
	}

	renderContent(route) {
		const contentContainer = this.shadowRoot.getElementById('content');
		contentContainer.innerHTML = ''; // Clear previous content

		const componentName = this.routes[route] || 'not-found-component';
		const component = document.createElement(componentName);
		contentContainer.appendChild(component);
	}
}

// Use 'food-card' instead of 'foodCard' in customElements.define
customElements.define('food-card', FoodCard);
