import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grid = [
    [{content: ''},{content: ''},{content: ''}],
    [{content: ''},{content: ''},{content: ''}],
    [{content: ''},{content: ''},{content: ''}]
  ];

  players = ['X', 'O'];
  currentPlayer = 0;

  play(cell){
    cell.content = this.players[this.currentPlayer];
    if(this.checkWinner(this.grid)){
      console.log('Player %s WIN !', this.players[this.currentPlayer]);
    }
    this.currentPlayer++;
    if(this.currentPlayer === 2){
      this.currentPlayer = 0;
    }
  }

  checkWinner(grid){
    let maxX = grid.length;
    let pZ1, pZ2, countZ1 = 0, countZ2 = 0;
    for(let i = 0, z = maxX - 1; i < maxX; i++, z--){
      let pX, pY, countX = 0, countY = 0;
      for(let j = 0; j < maxX; j++){
        if(pX && pX === grid[i][j].content){
          countX++;
        }
        if(pY && pY === grid[j][i].content){
          countY++;
        }
        pX = grid[i][j].content;
        pY = grid[j][i].content;
      }
      if(pZ1 && pZ1 === grid[i][i].content){
        countZ1++;
      }
      if(pZ2 && pZ2 === grid[i][z].content){
        countZ2++;
      }
      pZ1 = grid[i][i].content;
      pZ2 = grid[i][z].content;
      if(countX === 2 || countY === 2 || countZ1 === 2 || countZ2 === 2){
        return true;
      }
    }
  }
}
