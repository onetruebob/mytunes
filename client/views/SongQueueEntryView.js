// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'li',

  template: _.template('(<%= artist %>) <%= title %> <a href="#">X</a>'),

  events: {
    'click a': function(){
      this.model.queueRemove();
    }
  },

  initialize: function() {
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
    this.$el.find(a)
  }

});
