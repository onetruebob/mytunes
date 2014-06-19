// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',


  initialize: function() {
    var that = this;
    this.$el.on('ended', function(){
      that.model.ended();
    });
  },

  setSong: function(song){
    this.model = song;
    this.model.on('ended', function(){
      this.clearSong();
    }, this);
    this.render();
  },

  clearSong: function(){
    this.model = undefined;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
