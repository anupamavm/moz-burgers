const template = document.createElement('template');
template.innerHTML = `

<style>
.root, .root * {
 
    }
.navBar {
    background:  #eeeeee;
    border-radius: 20px;
    width: 166px;
    height: 284px;
    position: relative;
    }

</style>

<div class="navBar" >
  <a href="/" id="homeBtn"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<g fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9" />
						<path
							stroke-miterlimit="16"
							d="M14.833 21v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"
						/>
						<path
							d="m21.818 9.364l-1.694-5.929A.6.6 0 0 0 19.547 3H15.5l.475 5.704a.578.578 0 0 0 .278.45c.39.233 1.152.663 1.747.846c1.016.313 2.5.2 3.346.096a.57.57 0 0 0 .472-.732Z"
						/>
						<path
							d="M14 10c.568-.175 1.288-.574 1.69-.812a.578.578 0 0 0 .28-.549L15.5 3h-7l-.47 5.639a.578.578 0 0 0 .28.55c.402.237 1.122.636 1.69.811c1.493.46 2.507.46 4 0Z"
						/>
						<path
							d="m3.876 3.435l-1.694 5.93a.57.57 0 0 0 .472.73c.845.105 2.33.217 3.346-.095c.595-.183 1.358-.613 1.747-.845a.578.578 0 0 0 .278-.451L8.5 3H4.453a.6.6 0 0 0-.577.435Z"
						/>
					</g>
				</svg>
			</a>

			<a href="/fooditems" id="fooditemsBtn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					>
						<path
							d="m15 15l3.379-3.379a2.121 2.121 0 0 1 1.5-.621H20a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h4.515a6 6 0 0 1 4.242 1.757zM3 15h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
						/>
						<path
							d="M12 4c-4.623 0-8.432 1.756-8.942 6c-.066.55.39 1 .942 1h16c.552 0 1.008-.45.942-1c-.51-4.244-4.319-6-8.942-6M7.001 8H7m5.002 0"
						/>
					</g>
				</svg>
			</a>

			<a href="/clients" id="clientsBtn"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
					/></svg
			></a>
			<a href="/orders" id="ordersBtn"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<g
						fill="none"
						stroke="currentColor"
						stroke-linejoin="round"
						stroke-width="2.5"
					>
						<path
							stroke-linecap="round"
							d="M7 21a2 2 0 0 1-2-2V3h9l5 5v11a2 2 0 0 1-2 2z"
						/>
						<path d="M13 3v6h6" />
					</g></svg
			></a>
			<a href="/reports" id="reportsBtn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
						<path
							d="M22.775 8A9 9 0 0 1 23 10h-9V1a9 9 0 0 1 8.775 7m-2.067 0A6.999 6.999 0 0 0 16 3.292V8z"
						/>
						<path
							d="M1 14a9 9 0 0 1 11-8.775V12h6.775A9 9 0 1 1 1 14m15.804 0H10V7.196A6.804 6.804 0 1 0 16.804 14"
						/>
					</g>
				</svg>
			</a>
</div>

`;

// components/layout-component.js

class LayoutComponent extends HTMLElement {
	constructor(routes) {
		super();
		this.routes = routes;
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		shadow.append(template.content.cloneNode(true));

		const homeBtn = this.shadowRoot.getElementById('homeBtn');
		const fooditemsBtn = this.shadowRoot.getElementById('fooditemsBtn');
		const clientsBtn = this.shadowRoot.getElementById('clientsBtn');
		const ordersBtn = this.shadowRoot.getElementById('ordersBtn');
		const reportsBtn = this.shadowRoot.getElementById('reportsBtn');

		homeBtn.addEventListener('click', () => {
			this.navigateTo('#/');
		});

		fooditemsBtn.addEventListener('click', () => {
			this.navigateTo('#/fooditems');
		});

		clientsBtn.addEventListener('click', () => {
			this.navigateTo('#/clients');
		});
		ordersBtn.addEventListener('click', () => {
			this.navigateTo('#/orders');
		});
		reportsBtn.addEventListener('click', () => {
			this.navigateTo('#/reports');
		});
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

customElements.define('layout-component', LayoutComponent);
