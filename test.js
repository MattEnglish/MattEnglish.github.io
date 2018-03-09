
      /*
          function createGame() {
            var para = document.createElement('p');
            document.body.appendChild(para);
          }
      */
        var rowLength = 5;
            var colLength = 5;

          function wrap(x)
          {
            if(x>4)
            {
              return 0;
            }
            if(x<0)
            {
              return 4;
            }
            return x;
          }
          var initialArray = [];
for(var i=0; i<5; i++) {
  initialArray[i] = [];
    for(var j=0; j<5; j++) {
      initialArray[i][j] = undefined;
    }
};

          function getColour(x)
          {
            if(x == 0)
            {
              return "blue";
            }
            return "red";
          }

          function changeColour(row,col)
          {
            if(initialArray[row][col]== "red")
            {
              initialArray[row][col]= "blue";
              return "blue";
            }
            initialArray[row][col]= "red";
            return "red";
          }

          function changeButtonColor(row,col)
          {
            var button = document.getElementById(wrap(row)+','+wrap(col));
            button.className = changeColour(wrap(row),wrap(col));
          }




          function handleSwitchButton(i){
            handleSwitch(i.currentTarget.id);
          }
          function handleSwitch(id) {

            rowColumnColour = id.split(",");
            row = parseInt(rowColumnColour[0]);
            col = parseInt(rowColumnColour[1]);
            changeButtonColor(row,col);
            changeButtonColor(wrap(row+1),wrap(col));
            changeButtonColor(wrap(row-1),wrap(col));
            changeButtonColor(wrap(row),wrap(col+1));
            changeButtonColor(wrap(row),wrap(col-1));
          }


          function createGame() {
            var newDiv = document.createElement('div');
            newDiv.className = 'box';
            
            for (var i=0; i < rowLength; i++)
            {
              for(var j=0; j < colLength; j++)
              {

              var para = document.createElement('button');
              para.textContent = 'You clicked the button!';
              para.className = 'red';
              para.id = i +',' + j;
              para.onclick= handleSwitchButton;
              initialArray[i][j] = 'red';
              //para.addEventListener('click', changeColor);

            newDiv.appendChild(para);
            }
          }
            //document.getElementById("button").style.color = "blue";

          document.body.appendChild(newDiv);

          for (var i=0; i < rowLength; i++)
          {
            for(var j=0; j < colLength; j++)
            {
              if(Math.random()>0.5)
              {
                handleSwitch(i +',' + j);
              }
            }
          }
        }


        function hide() {
          document.getElementById('createGame').style.display = 'none'; 
        }
          var buttons = document.querySelectorAll('button');

          buttons[0].addEventListener('click', createGame);
          buttons[0].addEventListener('click', hide);
          document.addEventListener('keydown', createGame);
