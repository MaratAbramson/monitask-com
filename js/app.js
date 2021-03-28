new Vue({
  el: '#app',
  data: {
    newProjectText: '',
    projects: [
      {
        id: 1,
        title: 'Freelancers'
      },
      {
        id: 2,
        title: 'Design'
      },
    ],
    errors: [],
    name: null,
    email: null,
    movie: null,
    nextProjectId: 3
  },
  methods: {
    addNewProject: function () {
      this.projects.push({
        id: this.nextProjectId++,
        title: this.newProjectText
      })
      this.newProjectText = ''
    },
    remove(index) {
      this.projects.splice(index, 1);
    },
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push('Укажите имя.');
      }
      if (!this.email) {
        this.errors.push('Укажите электронную почту.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Укажите корректный адрес электронной почты.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  }
})