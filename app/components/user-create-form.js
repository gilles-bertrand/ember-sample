import Component from '@ember/component';

export default Component.extend({
  didReceiveAttrs(){
    this.setProperties({
      first:'',
      last:'',
      email:''
    })
  },
  actions:{
    saveChanges(ev)
    {
      ev.preventDefault();
      this.onsubmit({
        first:this.first,
        last:this.last,
        email:this.email
      })
    }
  }
});
