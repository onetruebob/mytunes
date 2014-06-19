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
    this.$el.data('queueSong', this.model);
    return this.$el.html(this.template(this.model.attributes));
  }

});
