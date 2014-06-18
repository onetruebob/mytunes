// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();

    this.collection.on('add remove', function(){  //TODO: Why won't this work on 'change' ?
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.append('<h3>Song Queue</h3>');
    if (this.collection.length > 0) {
      var $list = this.$el.append('<ul></ul>');
      $list.append(
        this.collection.map(function(song){
          return new LibraryEntryView({model: song}).render();
        })
      );
    }
    return this.$el;
  }

});
