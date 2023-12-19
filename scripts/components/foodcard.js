class FoodCard extends HTMLElement {
	constructor(routes) {
		super();
		this.routes = routes;
	}

	connectedCallback() {
		// Attributes
		const imageUrl = this.getAttribute('image-src');
		const priceValue = this.getAttribute('price') || '700';
		const foodNameValue = this.getAttribute('food-name') || 'Classic Burger';
		const subNameValue = this.getAttribute('sub-name') || '(Large)';

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
		<style>
		.card,
		.card * {
		  box-sizing: border-box;
		}
		.card {
		  width: 166px;
		  height: 284px;
		  display:flex;
		  margin:20px;
		}
		

		.content {
		  background: var(--gra, #eeeeee);
		  border-radius: 20px;
		  display:flex;
		  flex-direction:column;
		  width: 100%;
		  height: 100%;
		  align-items:center;
		  position:relative;
		  gap:20px;	
		}
		
		.imageContainer {
			top:6px;
		  border-radius: 14px;
		  height:150px;
		  overflow: hidden;
		  position: relative;   
		}

		img{
			border:1px solid red;
			height: 150px;  
        width: 150px;  
        object-fit: cover;
		z-index:-1;
		}
		

		.price {
			position: absolute;       
			bottom: 10px;            
			background: rgba(0, 0, 0, 0.5);
			z-index: 2;              
			padding: 5px 10px;        
			width:100%;
			justify-content:center;
			align-items:center;
			color: white;     
		}

		.foodName{
			
			width:150px;
			
		}

		.name{
			font-size: 20px;
font-weight: 400;
		}

		.addbtn{
			padding: 10px 60px; 
    		font-size: 16px;
   			border: 2px solid black;
    		border-radius: 15px; 
    		background-color: none	; 
    		color: balck; 
    		cursor: pointer; 
		}

		.addbtn:hover{
   			border: 2px solid #FF7A00;
    		background-color: #FF7A00; 
    		color: balck; 
    		
		}

	</style>

			
<div class="card">
  <div class="content">

  <div class="imageContainer">
  			<img  src="${imageUrl}"/>	

			<div class="price">
			  <span>
				<span class="rs-span">Rs</span>
				<span class="price-span">${priceValue}</span>
			  </span>
			</div>

  </div>

    <div class="foodName">
      <span>
        <span class="name">${foodNameValue}<br />
        </span>
        <span class="subName">${subNameValue}<br />
        </span>
      </span>        
    </div>	

	<button class="addbtn" onclick="">Add</button>


  </div>
</div>
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
