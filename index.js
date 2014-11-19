function Component () {}

Component.prototype.create = function (model) {
  var self = this;
  var FastClick = require('fastclick');
  this.fastclick = new FastClick(document.body, model.get('options'));

  model.on('change', 'options**', function () {
    self.fastclick.destroy();
    self.fastclick = new FastClick(document.body, model.get('options'));
  });
};

Component.prototype.destroy = function () {
  this.fastclick.destroy();
};

module.exports = Component;
