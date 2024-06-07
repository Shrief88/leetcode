/**
 * @param {character[][]} grid
 * @return {number}
 */

const dfs = (row,col,grid,visited) => {
    let cols = grid.length;
    let rows = grid[0].length;

    if(col<0 || col >= cols || row<0 || row>=rows || grid[col][row] !== "1" || visited[col][row]){
        return;
    }

    visited[col][row] = true; 
    dfs(row+1,col,grid,visited);
    dfs(row-1,col,grid,visited);
    dfs(row,col-1,grid,visited);
    dfs(row,col+1,grid,visited);
}

var numIslands = function(grid) {
    let cols = grid.length;
    let rows = grid[0].length;
    let visited = Array.from({length : cols} , () => Array.from({length : rows} , () => false));
    let islands = 0

    for(let i=0 ; i<cols ; i++){
        for(let j=0 ; j<rows ; j++){
            if(grid[i][j] === "1" && !visited[i][j]){
                islands++;
                dfs(j,i,grid,visited);
            } 
        }
    }

    return islands;
};