$(document).ready(function() {
    var isDragging = false;
    var startPosition;
    var startScrollLeft;
  
    $('.custom-div-container').on('mousedown', function(e) {
      isDragging = true;
      startPosition = e.pageX;
      startScrollLeft = $(this).scrollLeft();
      $(this).addClass('draggable');
    });
  
    $(document).on('mouseup', function() {
      isDragging = false;
      $('.custom-div-container').removeClass('draggable');
    });
  
    $(document).on('mousemove', function(e) {
      if (isDragging) {
        var distance = e.pageX - startPosition;
        $('.custom-div-container').scrollLeft(startScrollLeft - distance);
      }
    });
  });
  