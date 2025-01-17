document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight;
    function drawImageOnCanvas(imgSrc, x, y, width, height, repeatX = 1) {
      
    var img = new Image();
      img.onload = function() {
          for (var i = 0; i < repeatX; i++) {
              ctx.drawImage(img, x + i * width, y, width, height);
          }
      };
    img.src = imgSrc;
    }

    function drawShapeOnCanvas(shapeType, x, y, width, height, color, lineWidth, rotationAngle = 0) {
  
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
  
      ctx.save();
      ctx.translate(x + width / 2, y + height / 2);
      ctx.rotate(rotationAngle * Math.PI / 180);
      ctx.translate(-width / 2, -height / 2);
  
      switch (shapeType) {
          case 'rectangle':
              ctx.strokeRect(0, 0, width, height);
              break;
          case 'circle':
              ctx.beginPath();
              ctx.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI);
              ctx.stroke();
              break;
          case 'triangle':
              ctx.beginPath();
              ctx.moveTo(0, height);
              ctx.lineTo(width / 2, 0);
              ctx.lineTo(width, height);
              ctx.closePath();
              ctx.stroke();
              break;
          case 'oval':
              ctx.beginPath();
              ctx.ellipse(width / 2, height / 2, width / 2, height / 2, 0, 0, 2 * Math.PI);
              ctx.stroke();
              break;
          case 'cube':
              ctx.strokeRect(0, 0, width, height);
              ctx.strokeRect(width * 0.2, height * 0.2, width * 0.6, height * 0.6);
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(width * 0.2, height * 0.2);
              ctx.moveTo(width, 0);
              ctx.lineTo(width * 0.8, height * 0.2);
              ctx.moveTo(width, height);
              ctx.lineTo(width * 0.8, height * 0.8);
              ctx.stroke();
              break;
          default:
              console.error('Unknown shape type:', shapeType);
              break;
        }
  
      ctx.restore();
    }
    drawShapeOnCanvas('circle', 1500, -200, 500, 500, '#BA4140', 25); 
    drawShapeOnCanvas('rectangle', 1700, 800, 300, 200, '#fcca30', 100, -45); 
    drawShapeOnCanvas('rectangle', 1400, 800, 500, 500, '#fcca30', 80, -35); 
    drawShapeOnCanvas('triangle', 70, 50, 500, 500, '#1c78d4', 60, -76); 
     
    drawImageOnCanvas("background/shapes/square.png", -50, -100, 900, 900); //x, y SizeX, SizeY, Rotation
    drawImageOnCanvas("background/shapes/outline.png", 710, 130, 300, 130);

    window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxElements = document.querySelectorAll('.parallax-image');
    
    parallaxElements.forEach(function(element) {
        var parallaxOffset = (element.offsetTop - scrollTop) * -0.003;
        element.style.transform = 'translate3d(0, ' + parallaxOffset + '%, 0)';
    });

});    
});