// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  tagname: 'li',

  template: _.template('(<%= artist %>) <%= title %>'),

  initialize: function() {
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
