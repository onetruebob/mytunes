// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();

    this.collection.on('add remove', function(){  //TODO: Why won't this work on 'change' ?
      this.render();
    }, this);

    this.$el.droppable({
      drop: function( e, ui) {
        $(ui.draggable).data('song').enqueue();
      }
    });
  },

  render: function() {
    this.$el.children().detach();

    this.$el.append('<h3>Song Queue</h3>');
    if (this.collection.length > 0) {
      var $list = $('<ol></ol>')
      this.$el.append($list);
      $list.append(
        this.collection.map(function(song){
          return new SongQueueEntryView({model: song}).render();
        })
      );
    }
    return this.$el;
  }

});
