Vue.component("menu-card", {
    props: ["image", "title"],
    template: `
      <div>
        <img width="100" v-bind:src="image" v-bind:alt="title"/>
        <h2>{{ title }}</h2>  
      </div>
    `,
  });
  
  new Vue({
    el: "#menu",
  });
  