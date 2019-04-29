
window.onload = function(){
  var canvas = document.getElementById('canvas');

  canvas.width = document.body.clientWidth; //document.width is obsolete
  canvas.height = document.body.clientHeight; //document.height is obsolete

  canvasW = canvas.width;
  canvasH = canvas.height;

  cx = canvasW / 2;
  cy = canvasH / 2;

  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#000000';
  ctx.fillRect(0,0, canvasW, canvasH);

  // ctx.fillStyle = 'rgb(200, 0, 0)';
  // ctx.fillRect(10, 10, 50, 50);

  // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  // ctx.fillRect(30, 30, 50, 50);

  ctx.fillStyle = '#000000';
  ctx.fillRect(0,0, canvasW, canvasH);

  var step = 50;
  var step2 = 5;

  function draw_plane(color, step_fn) {
    ctx.fillStyle = color;
    // ctx.fillRect(0,0, canvasW, canvasH);

    var count = step_fn();      

    step = canvasW / count;
    
    var stepsx = canvasW / step;
    var stepsy = canvasH / step;

    for (var sx = -Math.floor(stepsx / 2); sx < stepsx/2; sx++)      
      for (var sy = -Math.floor(stepsy / 2); sy < stepsy/2; sy++) {
        drawPoint([cx + sx * step, cy + sy * step], ctx);
      }
  }

  var step_fn3 = get_step_fn(80, 0.005);
  var step_fn2 = get_step_fn(50, 0.005);
  var step_fn1 = get_step_fn(30, 0.005);  

  function draw_all() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0, canvasW, canvasH);
    
    draw_plane("#220000", step_fn3);
    draw_plane("#770000", step_fn2);
    draw_plane("#ff0000", step_fn1);
    
    
    window.requestAnimationFrame(draw_all);
  }

  window.requestAnimationFrame(draw_all);
}

function get_step_fn(start, step) {
  return function() {start-=step; return start};
}


function drawPoint(c, ctx) {
  // ctx.fillStyle = '#991111';
  ctx.fillRect(c[0] - 1, c[1] - 1, 3, 3);
}

function rand(from, to) {
  return Math.floor(Math.random() * (to - from) + from);
}

