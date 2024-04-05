export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = "...\n...\n...\n";
  }

  toString() {
    return this.board;
  }

  drop(block) {
    this.board = ".X.\n...\n...\n";
  }
}
