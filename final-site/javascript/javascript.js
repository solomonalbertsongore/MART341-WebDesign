
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

  // Art

  /* Title
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillText("Hello World", 875, 50); */

  // Most inner crosshair
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(925, 450, 10, 0, 2 * Math.PI);
  ctx.stroke();

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(925, 450, 30, 0, 2 * Math.PI);
  ctx.stroke();

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(925, 450, 50, 0, 2 * Math.PI);
  ctx.stroke();

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(925, 450, 100, 0, 2 * Math.PI);
  ctx.stroke();

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(925, 450, 200, 0, 2 * Math.PI);
  ctx.stroke();

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(925, 450, 400, 0, 2 * Math.PI);
  ctx.stroke();

  // Triangle top left
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext)
  {
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(925,450);
    context.lineTo(0,75);
    context.lineTo(0,0);
    context.fill();
  }

  // Triangle top mid
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext)
  {
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(925,450);
    context.lineTo(875,0);
    context.lineTo(965,0);
    context.fill();
  }

  // Triangle bot mid
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext)
  {
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(925,450);
    context.lineTo(875,900);
    context.lineTo(965,900);
    context.fill();
  }

  // Triangle bot left
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext)
  {
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(925,450);
    context.lineTo(0,825);
    context.lineTo(0,900);
    context.fill();
  }

  // Triangle bot right
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext)
  {
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(925,450);
    context.lineTo(1850,825);
    context.lineTo(1850,900);
    context.fill();
  }

  // Triangle top right
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext)
  {
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(925,450);
    context.lineTo(1850,75);
    context.lineTo(1850,0);
    context.fill();
  }
