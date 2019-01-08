const PaintCan = function(volume) {
  this.volume = volume;

  PaintCan.prototype.checkEmpty = function () {
      if (this.volume === 0){
      return true;
      }
      else { return false;
      };
  };

  PaintCan.prototype.empty = function () {
    if (this.volume > 0) {
    this.volume = 0;
    }
  };


};





module.exports = PaintCan;
