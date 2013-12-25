function showTime()
 {
  var dat = new Date();
  var H = '' + dat.getHours();
  H = H.length<2 ? '0' + H:H;
  var M = '' + dat.getMinutes();
  M = M.length<2 ? '0' + M:M;
  var clock = H + ':' + M ;
  document    .getElementById('time').innerHTML=clock;
  setTimeout(showTime,1000);
 }
 
