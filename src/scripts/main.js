var $ = require('jquery');

// carousel
// Needs to take a list of elements from the dom
// remove all but the first n
// ever m milliseconds remove the first and insert a new one a the end
// Do this in a circular bufferd fasion


function carousel(selector, milliseconds) {
  var carousel = (function Carousel(selector, milliseconds) {
    self = {};
    self.marquee = $(selector);
    self.buffer = self.marquee.children().toArray();
    self.containerWidth = () => self.marquee.width();
    self.nextElement = () => $(self.buffer.slice(-1).pop());
    self.displayedWidth = () => self.marquee.children().toArray().reduce((s,e) => $(e).outerWidth(true) + s, 0);
    self.bufferElement = () => self.buffer.unshift(self.marquee.children().first().remove());
    self.updateDisplayed = function () {
      self.buffer.forEach(function (el) {
        if (self.displayedWidth() < self.containerWidth() - $(self.nextElement()).width()) {
          var el = self.buffer.pop();
          self.marquee.append(el);
        }
      });
      if (self.displayedWidth() > self.containerWidth()) {
        self.bufferElement();
      }
    };

    self.interval = setInterval(function () {
      self.bufferElement();
      self.updateDisplayed();
    }, milliseconds);

    self.marquee.empty();
    return self;
  })(selector, milliseconds);

  carousel.updateDisplayed();
}

carousel('.marquee', 2000);
