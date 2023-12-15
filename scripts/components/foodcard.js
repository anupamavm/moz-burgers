const template = document.createElement('template');
template.innerHTML = `

<style>
.root, .root * {
 
    }
.root {
    background:  #eeeeee;
    border-radius: 20px;
    width: 166px;
    height: 284px;
    position: relative;
    }

</style>

<div class="root" >
</div>

`;

class FoodCard extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.append(template.content.cloneNode(true));
	}
}

window.customElements.define('food-card', FoodCard);
