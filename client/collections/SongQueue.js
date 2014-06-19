// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('reset', function(current, prev){
      if(this.at(0) !== prev.previousModels[0]) { //If the top song has changed, play the new one.
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
    this.notifyIfEmpty();
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
    if(song === this.at(0)) { //Trigger ended on the top song on the queue
      song.ended();
    }
    this.remove(song);
    if(this.at(0)){this.playFirst()}
    this.notifyIfEmpty();
  },

  notifyIfEmpty: function() {
    if(this.length < 1) {
      this.trigger('queueEmpty');
    }
  }

});