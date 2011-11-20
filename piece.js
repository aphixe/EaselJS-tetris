(function(window) {

  function Piece(x, y) {
    this.initialize();

    Piece.prototype.xBoundary = x;
    Piece.prototype.yBoundary = y;
  }
  Piece.prototype = new Container();

  Piece.prototype.block1 = null;
  Piece.prototype.block2 = null;
  Piece.prototype.block3 = null;
  Piece.prototype.block4 = null;

  Piece.prototype.BLOCK_SIZE = 20;

  Piece.prototype.xBoundary = 0;
  Piece.prototype.yBoundary = 0;

  Piece.prototype.height = 0;
  Piece.prototype.width = 0;

  Piece.prototype.preventDown = false;

  // constructor:
  Piece.prototype.Container_initialize = Piece.prototype.initialize;

  Piece.prototype.initialize = function() {
    this.Container_initialize();
  }

  // public methods:
  Piece.prototype.addBlock = function(xOffset, yOffset) {
    var block = new Shape();
    var g = block.graphics;
    var xStart = xOffset * this.BLOCK_SIZE;
    var yStart = yOffset * this.BLOCK_SIZE;
    g.clear();
    g.beginStroke("#000000");
    g.lineTo(xStart, yStart + this.BLOCK_SIZE);
    g.lineTo(xStart + this.BLOCK_SIZE, yStart + this.BLOCK_SIZE);
    g.lineTo(xStart + this.BLOCK_SIZE, yStart);
    g.lineTo(xStart, yStart);
    g.closePath();
    this.addChild(block);

    if (Math.abs(yStart + this.BLOCK_SIZE) > this.height) {
      this.height = yStart + this.BLOCK_SIZE;
    }

    if (Math.abs(xStart + this.BLOCK_SIZE) > this.width) {
      this.width = xStart + this.BLOCK_SIZE;
    }

  }

  Piece.prototype.tick = function() {
    if (this.y < this.yBoundary && !this.preventDown) {
      this.y += this.BLOCK_SIZE;
    }
    this.preventDown = false;
  }

  Piece.prototype.moveRight = function() {
    if (this.x < this.xBoundary - this.width) {
      this.x += this.BLOCK_SIZE;
    }
  }

  Piece.prototype.moveLeft = function() {
    if (this.x > 0) {
      this.x -= this.BLOCK_SIZE;
    }
  }

  Piece.prototype.moveDown = function() {
    if (this.y < this.yBoundary) {
      this.y += this.BLOCK_SIZE;
    }
  }

  window.Piece = Piece;
}(window));
