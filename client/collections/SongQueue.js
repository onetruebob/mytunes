// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.songEnded();
    });

    this.on('dequeue', function(){
      this.dequeue();
    });

    this.on('queueRemove', function(song){
      this.removeSongFromQueue(song);
    }, this);
  },

  enqueue: function (song){
    this.push(song);
  },

  dequeue: function (){
    this.shift();
  },

  songEnded: function() {
    this.dequeue();
    if(this.length >= 1) {
      //Play a song if there is one in the queue
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
  },

  removeSongFromQueue: function(song) {
    this.remove(song);
  }

});