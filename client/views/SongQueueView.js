// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    var that = this;
    this.render();

    this.collection.on('add remove', function(){  //TODO: Why won't this work on 'change' ?
      this.render();
    }, this);

    this.$el.droppable({
      drop: this._songDrop.bind(this)
    });

    this.$el.sortable({
      // containment: 'parent',
      items: 'li',
      cursor: 'move',
      stop: this._songReorder.bind(this)
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
  },

  _songDrop: function (e, ui){
    var song = $(ui.draggable).data('song');
    if(song) { // Only trigger when dropping a song onto a queue
      song.enqueue();
    } 
  },

  _songReorder: function(e, ui){
    //Get ordered list of songs from the UI changes
    var songModels = [];
    var $uiSongs = this.$el.find('li');
    $uiSongs.each(function (liIndex){
      var songModel = $(this).data('queueSong');
      if(songModel) {
        songModels.push(songModel);
      }
    });
    // Set this at the new sort order for the model
    this.collection.reset(songModels);
  }

});
