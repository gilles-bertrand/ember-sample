import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    saveChanges(attrs){
      let user = this.store.createRecord('user',attrs);
      user.save().then(()=>{
        this.transitionToRoute('user');
      })
    }
  }
});
