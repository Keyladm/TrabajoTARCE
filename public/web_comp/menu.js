const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: black;
    }

    .menu-card img{
      width: 230px;
      height: 180px;
      margin-left = 500px;
    }


    .divCuadricula {
			font-family: 'Poppins', sans-serif;
      float: left;
      text-align: left;
			background: #deeee9;
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 2fr;
			grid-gap: 10px;
      margin-left = 50px;
			margin-bottom: 15px;
		}

    .menu-card h1{
      cursor: pointer;
    }

    .menu-card button{
			cursor: pointer;
      background-color: #47a386;
			color: #fff;
			border: 0;
			border-radius: 5px;
			padding: 10px 10px;
		}
  </style>

  <div class="menu-card">
    <h1 id = "hideShow" onclick = "hideShow()" ></h1>
    <div id= "platos">
      <div class ="divCuadricula">
          <img />
          <div>
            <h3></h3>
            <p></p> 
      </div> 
    </div>
  </div>


`;

class MenuWebComponent extends HTMLElement{

  constructor(){
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('descripcion');
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');

  }

  
	hideShow() {
		this.showInfo= !this.showInfo;
		
		const info = this.shadowRoot.querySelector('#platos');
		const boton = this.shadowRoot.querySelector('#hideShow');
		
		if (this.showInfo) { 
			info.style.display = 'table';
			toggleBtn.innerText = 'Ocultar informacion';
		} else {
			info.style.display = 'none';
			toggleBtn.innerText = 'Mostrar informacion';	  
		  }
	}
	
	connectedCallback() {
		this.shadowRoot.querySelector('#hideShow'). addEventListener('click', () => this.hideShow());
	}
	
	disconnectedCallback() {
		this.shadowRoot.querySelector('#hideShow'). removeEventListener();
	}

}

window.customElements.define("menu-card", MenuWebComponent);


/*Vue.component("menu-card", {
    props: ["image", "title"],
    template: `
      <div class = "row">
        <div class = "col-12 col-sm-6 col-md-4 col-lg-3" v-for="(pasta, index) in pastas">
          <h2>{{ title }}</h2>
          <img width="200" v-bind:src="image" v-bind:alt="title"/> 
        </div>
      </div>
    `,
  });

  .menu-card{
      width:50%;
      display: table;
      float: left;
      text-align: center;
      margin: 1.5%;
      max-width: 20%;
      height: 80px;
    }

    <button id = "hideShow"> Mostrar informacion </button> 
  
  new Vue({
    el: "#menu",
    data:{
      pastas:[
        {title: 'Lasaña',
          image: "https://assets.unileversolutions.com/recipes-v2/232080.jpg"},

        {title: 'Tortellini', 
          image: 'https://unareceta.com/wp-content/uploads/2016/10/tortellini.jpg'},

        {title: 'Saquitos de pera', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGUAMDTdNkuhv23urZd0ToKy3Ue--6MshPwQ&usqp=CAU'},

        {title: 'Ñoquis', 
          image: 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2016-05-26-18-07-22/noquis-con-salsa-bolonesa.jpeg'}
      ],

      pizzas:[
        {title: 'Barbacoa', 
          image: "https://okdiario.com/img/2015/09/08/receta-pizza-barbacoa-655x368.jpg"},

        {title: 'Carbonara', 
          image: 'https://images.hola.com/imagenes/cocina/recetas/20200120158507/pizza-carbonara-con-huevo/0-770-845/pizza-carbonara-con-huevo-t.jpg'},
        
        {title: 'Marinera', 
          image: 'https://i.pinimg.com/originals/dc/aa/c2/dcaac2b0e856eb586932c0c0c5cc94e9.jpg'},

        {title: '4 quesos', 
          image: 'https://recetinas.com/wp-content/uploads/2018/04/pizza-cuatro-quesos.jpg'}
      ]
    }
  });*/
  