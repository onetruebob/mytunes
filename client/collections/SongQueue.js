// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      this._playNext();
    }, this);

    this.on('ended', function(){
      this.songEnded();
    })
  },

  enqueue: function (song){
    this.push(song);
  },

  songEnded: function() {
    this.shift();
    this._playNext();
  },

  _playNext: function(){
    if(this.length >= 1) {
      //Play a song if there is one in the queue
      this.at(0).play();
    }
  }

});