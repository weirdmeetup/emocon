$('.first.circle').circleProgress({
      value: 0.99,
      fill: {gradient: ['#ff9822']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(99 * progress) + '<i>%</i>');
    });

    $('.second.circle').circleProgress({
      value: 0.70,
      fill: {gradient: ['#ff9822']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
    });

    $('.third.circle').circleProgress({
      value: 0.50,
      fill: {gradient: ['#ff9822']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
    });

    $('.fourth.circle').circleProgress({
      value: 1.0,
      fill: {gradient: ['#ff9822']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
    });