class Square {
  constructor( x, y ) {
    this.x = x
    this.y = y
    this.piece = 'blank'
  }
}

class Pawn {
  constructor( color ) {
    this.color = color
    this.name = 'Pawn'
    this.moves = 0
  }

  legalMove( x, y, x2, y2 ) {
    if ( x === x2 && this.color === 'white' ) {
      if ( this.moves === 0 ) {
        if ( y - y2 === 1 || y - y2 === 2 ) {
          return true
        }
      } else if ( y - y2 === 1 ) {
        return true
      }
    }
    if ( x === x2 && this.color === 'black' ) {
      if ( this.moves === 0 ) {
        if ( y - y2 === -1 || y - y2 === -2 ) {
          return true
      }
      } else if ( y - y2 === -1 ) {
        return true
      }
    }
  }
}

class Rook {
  constructor( color ) {
    this.color = color
    this.name = 'Rook'
    this.moves = 0
  }

  legalMove( x, y, x2, y2 ) {
    if ( y2 === y || x2 === x ) {
      return true
    }
  }
}

class Knight {
  constructor( color ) {
    this.color = color
    this.name = 'Knight'
    this.moves = 0
  }

  legalMove( x, y, x2, y2 ) {
    if ( Math.abs( x2 - x ) === 2 || Math.abs( y2 - y ) === 2 ) {
      if ( Math.abs( x2 - x ) + Math.abs( y2 - y ) === 3) {
        return true
      }
    }
  }
}

class Bishop {
  constructor( color ) {
    this.color = color
    this.name = 'Bishop'
    this.moves = 0
  }

  legalMove( x, y, x2, y2 ) {
    if ( Math.abs( x2 - x) === Math.abs( y2 - y ) ) {
      return true
    }
  }

  pathClear(x, y, x2, y2) {
    let dirX = x2 > x ? 1 : -1
    let dirY = y2 > y ? 1 : -1

    for ( let i = 1; i < Math.abs( x2 - x ) - 1; ++i ) {
      // if ( pieceOnSquare( x + i * dirX, y + i * dirY ) ) {
      if ( Square( x + i * dirX, y + i * dirY ).piece !== 'blank' ) {
        return false;
      }
    }
    return true;
  }

}

class Queen {
  constructor( color ) {
    this.color = color
    this.name = 'Queen'
    this.moves = 0
  }

  legalMove( x, y, x2, y2 ) {
    if ( y2 === y || x2 === x || Math.abs( x2 - x) === Math.abs( y2 - y ) ) {
      return true
    }
  }
}

class King {
  constructor( color ) {
    this.color = color
    this.name = 'King'
    this.moves = 0
  }

  legalMove( x, y, x2, y2 ) {
    if ( y2 === y || x2 === x || Math.abs( x2 - x ) === Math.abs( y2 - y ) ) {
      if ( Math.abs( x2 - x ) <= 1 && Math.abs( y2 - y ) <= 1 ) {
        return true
      }
    }
  }
}

export { Square, Pawn, Rook, Knight, Bishop, Queen, King }
