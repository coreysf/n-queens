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
        if(solution.hasAnyRooksConflicts()){
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

  var solutionCount = 0;
  var board = new Board({n: n});
  var findSolution = function(startingColumn) {
    if (startingColumn === n) {
      solutionCount++;

      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(i, startingColumn);
      if (!board.hasAnyColConflicts() && !board.hasAnyRowConflicts())
      {
        findSolution(startingColumn + 1);
      } 
      board.togglePiece(i, startingColumn);
    }
  };
  
  findSolution(0);


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};








// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var allSolutions=[];


    var fullQueensArray = function(n) {
      var solutionCount = 0;
      var board = new Board({n: n});
      var a;
      var findSolution = function(startingColumn) {
        if (startingColumn === n) {
          a = JSON.stringify(board.rows());
          solutionCount++;

          return;
        }

        for (var i = 0; i < n; i++) {
          board.togglePiece(i, startingColumn);
          if (!board.hasAnyColConflicts() && !board.hasAnyRowConflicts() && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts())
          {
            findSolution(startingColumn + 1);
            allSolutions.push(board.rows());
          } 
          board.togglePiece(i, startingColumn);
        }
      };
      
      findSolution(0);
      a = JSON.parse(a);
      console.log('Number of solutions for ' + n + ' queens:', solutionCount);
      return a[0];
  };
  return fullQueensArray(n);
};








// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var solutionCount = 0;
  var board = new Board({n: n});
  var findSolution = function(startingColumn) {
    if (startingColumn === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(i, startingColumn);
      if (!board.hasAnyColConflicts() && !board.hasAnyRowConflicts() && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts())
      {
        findSolution(startingColumn + 1);
      } 
      board.togglePiece(i, startingColumn);
    }
  };
  
  findSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};










  /*
  var solution = new Board({n: n});

    
  var findSolution = function(startingColumn) {
    if (startingColumn === n) {
      return;
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(i, startingColumn);
      if (!solution.hasAnyColConflicts() && !solution.hasAnyRowConflicts() && !solution.hasAnyMinorDiagonalConflicts() && !solution.hasAnyMajorDiagonalConflicts())
      {
        findSolution(startingColumn + 1);
      } 
      solution.togglePiece(i, startingColumn);
    }
  };
  
  findSolution(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};
*/


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
/*window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});


  var findSolution = function(startColumn) {

      if (startColumn === n ){
        solutionCount++;
        return;
      }

      for (var i = 0; i < n; i++) {
        board.togglePiece(i,startColumn);

        if (    !board.hasAnyColConflicts()
             && !board.hasAnyMajorDiagonalConflicts()
             && !board.hasAnyMinorDiagonalConflicts()
             && !board.hasAnyRowConflicts()
           ){
          findSolution(startColumn+1);
        }


        board.togglePiece(i, startColumn);
      }
    };

  findSolution(0)
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
*/
