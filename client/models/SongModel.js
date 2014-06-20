// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function (){
    this.attributes.playCount = 0;
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  ended: function(){
    this.attributes.playCount++;
    this.trigger('updatePlayCount');
    this.trigger('ended', this)
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  queueRemove: function(){
    this.trigger('queueRemove', this);
  }
});
