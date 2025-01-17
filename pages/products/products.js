document.addEventListener('DOMContentLoaded', function() {
    
   window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxContainers = document.querySelectorAll('.parallax-container');
    
    parallaxContainers.forEach(function(container) {
        var parallaxOffset = (container.offsetTop - scrollTop) * -0.01; // Adjust the parallax speed as needed
        container.querySelector('.parallax-image').style.transform = 'translate3d(0, ' + parallaxOffset + '%, 0)';
    });
});

    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth - 10;
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
    drawShapeOnCanvas('circle', -250, -200, 500, 500, '#BA4140', 25); 
    drawShapeOnCanvas('rectangle', -110, 850, 300, 200, '#fcca30', 40, -45); 
    drawShapeOnCanvas('rectangle', 50, 850, 300, 200, '#fcca30', 40, -55); 
    
});