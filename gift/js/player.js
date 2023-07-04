$('#btn-present').click(function(){
  const vplayer = new Plyr('#player');
  vplayer.play();
  vplayer.fullscreen.enter();
  
  $("#vid_player").css({ 
    display: 'block',
    position: "absolute",
    top: "0px",
    width: '100%',
    height: '100%',
    "background-color": 'white',
    "z-index": 100
  })
});