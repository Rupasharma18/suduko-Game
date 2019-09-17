var unsolved = [
	[0, 0, 0, 2, 6, 0, 7, 0, 1],
	[6, 8, 0, 0, 7, 0, 0, 9, 0],
	[1, 9, 0, 0, 0, 4, 5, 0, 0],
	[8, 2, 0, 1, 0, 0, 0, 4, 0],
	[0, 0, 4, 6, 0, 2, 9, 0, 0],
	[0, 5, 0, 0, 0, 3, 0, 2, 8],
	[0, 0, 9, 3, 0, 0, 0, 7, 4],
	[0, 4, 0, 0, 5, 0, 0, 3, 6],
	[7, 0, 3, 0, 1, 8, 0, 0, 0]
];
console.log("this is your unSolved sudoku puzzle:-\n", unsolved);

// puzzle solver start from here.
function sudokuPuzzle(puzzle) {
	var storeimpossible = {};
	var impossibleNumber = {};
	// this loop going for whole 81 boxes.
	do {
		var emptyCell = 0;
		// this loop for rows
		for (var horz = 0; horz < puzzle.length; horz++) {
			// this loop for columns
			for (var vert = 0; vert < puzzle.length; vert++) {
				// this line checking in whole puzzle zero value.
				if ((puzzle[horz][vert]) === 0) {
					// this is variable storing the impossible value.
					storeimpossible = {};
					// this loop for store the impossiable value in object.
					for (let i = 0; i < puzzle.length; i++) {
						// this condition checking rows.
						if (puzzle[horz][i] > 0) {
							// this objet storing the possiable keys and value.
							storeimpossible[puzzle[horz][i]] = true;
						}
						// this condition checking columns and storing a value inside the object.
						if (puzzle[i][vert] > 0) {
							storeimpossible[puzzle[i][vert]] = true;
						}
					}
					// this loop for rows 3*3 grid.
					for (let gridHorz = Math.floor(horz / 3) * 3; gridHorz < Math.floor(horz / 3) * 3 + 3; gridHorz++) {
						// this loop for columns 3*3 grid.
						for (let gridVert = Math.floor(vert / 3) * 3; gridVert < Math.floor(vert / 3) * 3 + 3; gridVert++) {
							if (puzzle[gridHorz][gridVert]) {
								// here stroing all the grids data in object.
								storeimpossible[puzzle[gridHorz][gridVert]] = true;
							}
						}
					}
					//  in this line getting all the keys from object.
					impossibleNumber = Object.keys(storeimpossible);
					if (impossibleNumber.length === 8) {
						// this loop is working for replacing value from puzzle.
						for (let num = 1; num < 10; num++) {
							if (impossibleNumber.indexOf(num.toString()) < 0) {
								puzzle[horz][vert] = num;
							}
						}

					} else {
						emptyCell++;
					}
				}
			}
		}


	}while(emptyCell>0)
	return puzzle;

}
let funCall = sudokuPuzzle(unsolved);
console.log("solved Puzzle :-\n", funCall);