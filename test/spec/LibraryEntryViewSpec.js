describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new LibraryEntryView({model: model});
    view.render();
  });

  // This spec passes already, but it's mutually exclusive with the one below.
  // Comment it out when implementing the song queue.
  xit ('plays dblclicked songs', function(){
    sinon.spy(SongModel.prototype, 'play');

    view.$el.children().first().dblclick();
    expect(model.play).to.have.been.called;

    SongModel.prototype.play.restore();
  });

  xit('queues dblclicked songs', function(){
    sinon.spy(SongModel.prototype, 'enqueue');

    view.$el.children().first().trigger('dblclick');
    expect(model.enqueue).to.have.been.called;

    SongModel.prototype.enqueue.restore();
  });

});
