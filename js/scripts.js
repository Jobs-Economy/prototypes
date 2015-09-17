$('#wage-slider').slider({
  formatter: function(value) {
    return '$' + value;
  },
  tooltip: 'always',
  ticks: [9.25, 25],
  ticks_labels: ['$9.25', '$25']
});


$('#map-slider').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
