function Coordinate(x,y){
    this.x = x;
    this.y = y;
}

Coordinate.prototype.equals = function(other){
    if(!other instanceof Coordinate){
        return false;
    }
    return this.x == other.x && this.y == other.y;
}

Array.prototype.containsCoordinate = function(coordinate){
    if(this.length == 0 || !coordinate instanceof Coordinate){
        return false;
    }

    for(var i = 0; i < this.length; i++){
        var o = this[i];
        if(o.x == coordinate.x && o.y == coordinate.y){
            return true;
        }
    }
    return false;
}

Coordinate.makeCoordinates = function(startRow, startColumn, separate){
    var coordinates=[];
    var startX = startRow, startY = startColumn;
    //1 row
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    startY += separate;
    startY += 2;
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    startY += 1 + separate;
    startY++;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 5;
    coordinates.push(new Coordinate(startX, startY++));
    //2 row
    startX++;
    startY = startColumn;
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 2 + separate + 2;
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    startY += 2;
    coordinates.push(new Coordinate(startX, startY++));
    startY++;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 2;
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    startY += separate + 1;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 5;
    coordinates.push(new Coordinate(startX, startY++));
    //3 row
    startX++;
    startY = startColumn
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 2 + separate
    startY++;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 5;
    coordinates.push(new Coordinate(startX, startY++));
    startY+= 5;
    coordinates.push(new Coordinate(startX, startY++));
    startY += separate;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 5;
    coordinates.push(new Coordinate(startX, startY++));
    //4 row
    startX++;
    startY = startColumn
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 2 + separate
    startY += 2;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 9;
    coordinates.push(new Coordinate(startX, startY++));
    startY += separate + 1;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 5;
    coordinates.push(new Coordinate(startX, startY++));
    //5 row
    startX++;
    startY = startColumn
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 2 + separate
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 7;
    coordinates.push(new Coordinate(startX, startY++));
    startY += separate + 2;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 5;
    coordinates.push(new Coordinate(startX, startY++));
    //6 row
    startX++;
    startY = startColumn
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 2 + separate
    startY += 4;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 5;
    coordinates.push(new Coordinate(startX, startY++));
    startY += separate + 2 + 1;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 5;
    coordinates.push(new Coordinate(startX, startY++));
    //7 row
    startX++;
    startY = startColumn
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 2 + separate
    startY += 5;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    startY += separate + 3 + 1;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 5;
    coordinates.push(new Coordinate(startX, startY++));
    //8 row
    startX++;
    startY = startColumn
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 2 + separate
    startY += 6;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 1;
    coordinates.push(new Coordinate(startX, startY++));
    startY += separate + 4 + 1 + 1;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 3;
    coordinates.push(new Coordinate(startX, startY++));
    //9 row
    startX++;
    startY = startColumn
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    startY += separate;
    startY += 6;
    coordinates.push(new Coordinate(startX, startY++));
    startY += 5 + separate + 3;
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    coordinates.push(new Coordinate(startX, startY++));
    return coordinates;
}