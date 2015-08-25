/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var x = 0;

  for(var i=0; i<n;i++){
     for (var j=0; j<n; j++) {
        solution.togglePiece(x,j);
        if(solution.hasAnyRowConflicts() || solution.hasAnyColConflicts()){
          solution.togglePiece(x,j);
        } else {
          x++;
          j = n;
        }
    }  
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = undefined; //fixme
  var flag = false;
  var x = 0;

    for(var i=0; i<n;i++){
      function recurse(position) {
         for (var j=position || 0; j<n; j++) {
            solution.togglePiece(x,j);
            if(solution.hasAnyRowConflicts() || solution.hasAnyColConflicts()){
              solution.togglePiece(x,j);
            } else {
              x++;
              recurse()
            }
        }
      }  
  }


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n});
  var x = 0;
  // var flag;
  var filledRows = {};

  for(var i=0; i<n;i++){
     for (var j=0; j<n; j++) {
        solution.togglePiece(x,j);
        if(solution.hasAnyQueensConflicts()){
          if (j < n ) {
            // if we haven't reached the end of the row, toggle piece *off* and go through loop another time, moving to the next column
            solution.togglePiece(x,j);
          } else {   // if we've reached the end of the row, (1) toggle piece *off*, (2) toggle *previous* piece off, (3) move to previous piece to next column(s), until no conflict, (4) move forward again
            solution.togglePiece(x,j);
            x--;
            solution.togglePiece(x, filledRows[x][1]);
            delete filledRows[x];
            i--;
            j = n;
          }

        } else {
          filledRows[x] = [x, j];
          console.log("this is accessed");
          console.log("filled rows: " + JSON.stringify(filledRows));
          x++;
          j = n;
        }
    }  
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = new Board({n: n});
  var x = 0;

  for(var i=0; i<n;i++){
     for (var j=0; j<n; j++) {
        solution.togglePiece(x,j);
        if(solution.hasAnyRowConflicts() || solution.hasAnyColConflicts() || solution.hasAnyMajorDiagonalConflicts() || solution.hasAnyMinorDiagonalConflicts()){
          solution.togglePiece(x,j);
        } else {
          x++;
          j = n;
        }
    }  
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount.rows();
};
