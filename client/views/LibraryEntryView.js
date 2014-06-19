// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'li',

  template: _.template('(<%= artist %>) <%= title %>'),

  events: {
    // 'click': function() {
    //   this.model.enqueue();
    // }
  },

  initialize: function (){
    this.$el.draggable();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
