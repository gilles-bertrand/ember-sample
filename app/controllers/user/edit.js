import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    saveUser(ev){
      ev.preventDefault();
      this.model.save().then(()=>{
        this.transitionToRoute('user.detail',this.model.id);
      })
    }
  }
});
