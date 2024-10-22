**Given your inputs, what are the steps necessary to return the desired output?**

**Follow TDD, one step at a time. Write a test, then make it pass**

1. Create a Ship class.

    1.1. The ship objects will have three properties:
        i) length – length of the ship,
        ii) hits – the no. of times the ship has been hit,
        iii) sunk – is a true or false(default) state property which tells whether a ship has been sunk or not.
        iv) placement – it can have “top”, “bottom”, “left”, or “right”

    1.2. Only methods or properties used outside the object need unit tests. Private methods or properties do not need unit tests.

    1.3. hit() - Increases the no. of the hits in your ship. The hits function should check if the no. of hits is lesser than the length of the ship. If it is, then it should increase the no. of hits by 1. Otherwise if the no. of hits is equal to the length, then it should do nothing.

    1.4. isSunk() - It basically checks if the length of the ship equals the no. of hits taken by the ship. If it is, then change the sunk property of the object from false to true.

2. Create a Gameboard class. (Use same coords for DOM)

    2.1. The Gameboard object has a board property which is a 10x10 grid. Use a 2D array to construct the board. Refer to Tic-tac-toe project if you need to. 

    2.1. Do not rely on the DOM or console.logs to check if your code is coming together correctly. Use the tests to determine if your code is working correctly.

    2.2. Create a placeShip() function that takes the following arguments:

        i) The ship’s length

        ii) coordinates to place the ship object

        iii) placement – top, bottom, left, right


        2.2.1. The coordinates are just an array with two values. Use those values to find the index that matches in the 2D array i.e., your gameboard.

        2.2.2. Once you have your index, create and place the ship object on that index and then based on its placement and the length of the ship object, place the same ship object in the adjacent indexes in the array. LOGIC: Essentially when a property’s value inside one object changes, then it will change for all the objects because all those objects have the same reference.

        2.2.3. Couple things to look out for when placing the ship objects on adjacent indexes:

            i) First, before placing the ship object on the adjacent indexes, ensure all of them (no. of indexes = length of the ship) along the placement direction are empty. If they’re not all empty, then that means the ship can’t be placed in that direction. So switch the placement and try again using the same logic. Keep switching placement directions until you find one that works.

            ii) Edge cases – If any one of the adjacent indexes turn out to be undefined, meaning the original coordinates given to the function is an edge index. In that case, switch to another placement and try placing in indexes there. If that fails too, then switch placement and try again. Keep trying until you find a placement direction that works.

            iii) Integrate logic for both of those cases together and after all those tests, if it’s impossible to place a ship starting at that coordinates pair, then call your randomize() again to get another random coordinate pair and simply call placeShip() function with that coordinate instead utilizing recursion.

            iv) Utilize two randomize functions. One gives you random coordinates that you will implement later. Another gives you a random placement choice if the current placement doesn’t work. 

            v) Push the starting index and all the adjacent indexes (that you place your ship object into) into an array and Push this into a separate global array shipsCoordsArr or property inside the Gameboard class. You will need them later. (Might Implement Later)

    2.3. receiveAttack() - This function takes the following arguments:
        
        i) a pair of coordinates

        2.3.1. It’s quite simple, the function will use those coordinates to perform a direct array look-up and it will check if the array index contains a ship object and that its not null.

        2.3.2. If it does, then it means the opponent’s coordinates has hit your ship. So you call the hit() function of that particular object to increase it’s no. of hits count.

        2.3.3. It it doesn’t contain a ship object, then add a “miss” string to that index to record the coordinates of the missed shot.

    2.4. You’re already using the “miss” string to keep track of missed attacks, so if you need to update the DOM based on the attack, then all you have to do is check if an index contains “miss” string and if it does, then mark that spot as missed using some kind of visual indicator .

    2.5. At this point shipsCoordsArr should have the coordinates of all the ships. Even if another coordinates were clicked on, it will update the same object due to the same reference.

        2.5.1. Thus, inside receiveAttack() function call, add an additional check to see if all ships were sunk. Follow this series of steps:

            i) Iterate though the shipsCoordsArr array,

            ii) Get the first element of each of the arrays inside (each array has all coords of a ship and first element is the starting coord pair),

            iii) Using that coordinate pair, lookup gameboard[coordinate pair], and

            iv) Call the ship object’s isSunk() method on the object that exists in that index.

            vi) If all the ships were sunk, i.e., isSunk() returns true for all of them, then it means the game is over.

            vii) Return a “game-over” string to signify that.

3. Create a Player class.

    3.1. The player object has the following properties:

        i) type – “human” or “computer”

        ii) gameboard – Use the constructor of the GameBoard class to initialize a gameboard object.

4. DOM ACTION BEGINS BABY

    4.0.5. Create another module for this, probably index.js should be fine. Import the classes into this module. This is where the game will be played via DOM interactions and eventListeners.

    4.1. Setup a basic webpage with two 10x10 grids, side by side. One is for the player and another is for the computer. Create the grids in JS, you can probably iterate through the 10x10 double loop and create a div for each of the possible index. Also, you can add a custom data-row and data-column attributes to the divs that gives their position in the gameboard. Also add a data-hit attribute that has a false value by default (It can be turned true when the player clicks on that div). You can also add whatever other custom attributes that you may need.

    4.2. Create two player objects using the Player() constructor.

        i) Human player

        ii) Computer player

        4.2.1. You can use the placeShip() function to place ships in random spots by just giving the coordinates yourself. You will implement a system to place ships later.

        4.2.2. These are the ships I’ll have in my gameboard:

            i) Battleship – length-4 x1

            ii) Destroyer – length-3 x2

            iii)Submarine – length-2 x3

            iv)patrol boat – length-1 x4

    4.3. Create another module displayMethods.js that will render the game-board for both players. What methods do I need to render the gameboard?

        4.3.1. For the player grid, you would display all your ships. Let’s create a displayPlayerBoard() function.
            i) It will take the the game-board of the player and the DOM container that contains all the divs (cells in the game-board) as arguments.

            ii) Then with the DOM container, it will iterate through all the divs and if their data-row and data-column match the index present in gameboard:

                ii.a) It will check whether that index is an object and that its not null. If true, it will make the div’s background color: blue.

                ii.b) It will check if that index has a string “miss” and if it does, then it will make its background color: grey

                ii.c) It will check if the cell’s hit attribute is true and if so, then it will add an ‘X’ on that div

                ii.d) Finally, it will check if that object’s isSunk() returns true, if it does, then it will make that div’s background color dark red

        4.3.2. For the computer grid, you would display the ship divs as you click them. Let’s create a displayComputerBoard() function.

            i) It takes the gameboard of the computer and the DOM container that contains all the divs as arguments.

            ii) Then with the DOM container, it will iterate through all the divs and if their data-row and data-column match the index present in gameboard:

                ii.a)  It will check whether that index is an object, that its not null and that attribute “hit” is true. If all three conditions are met, that means the computer’s ship was hit and that div will have a ‘X’ mark now.
                
                ii.b) It will check if that index has a string “miss” and if it does, then it will make its background color: grey
                
                ii.c) Finally, it will check if that object’s isSunk() returns true, if it does, then it will make that div’s background color dark red.

    4.4. How would you switch turns between the players? It’s actually simple. You don’t need to. When you click on a div inside computer grid. It’s eventListener() will fire, which will update its gameboard. Then, inside the same eventListener you would handle computer’s side of the logic where it makes its play. Once its done making it’s play, then you would update the player’s grid and that round will end. That’s it for the game logic, no special round logic, etc.

    4.5. Follow exactly what’s given in TOP instructions.

        4.5.1. Make the player’s moves update the computer’s gameboard.

            i) Retrieve the data-row, data-column and data-hit.

            ii) Pass that data-row and column as a coordinate inside receiveAttack(). It call hit() for that ship and returns true if a ship was hit. It set’s the value to “miss” if it was a miss and returns false.

            iii) See results from receiveAttack(). If it returns true, then update hit attribute to false. If its returns false, then leave it be.

            iv) Call displayComputerBoard to update the computer’s gameboard.

        4.5.2. Make the computer make random plays.

            i) All you have to do is use math.Random() to get two random values for the row and the column and check if that row and column was already chosen.

            ii) Create another 10x10 grid visitedArr. Set all values to false by default. Then, to keep track of the coordinates already chosen, give that index a true value right after it got chosen. Do this updation when the player clicks on the div.

            iii) Only make the play with the newly obtained random coordinate if that same pair of coordinates contains false in that index.

    4.6. Check isAllSunk() for both human and computer together. If both are false, then you can proceed with both of their game logic inside that if block. Then inside the else block, check isAllSunk() individually for human and computer. If it returns true for human, then declare computer as winner. If it returns true for computer, then declare human as winner. 

5. You will using a randomize button that places the ships in random locations. Attach an event listener that does the following:

    i) Use the randomize function that generates a random object with newShipDetails.

    ii) Check if the returned object from the function is a valid obj with newShipDetails

    iii) If not recall the function again using a while loop

    iv) Once you get a valid obj, you’ll use placeShip() with its details to place the ship.

    v) Create a function that does steps i) to iv) for a ship.

    vi) Then at the end, however many ships you choose to have, you can call that function for each of those ships to get all the ships placed in correct spots that work when all of them are placed together.

    vii) At the start of the eventListener, make the board of the human empty before assigning new values.

**UI**

1. playAgain btn. What are the things that it must do?

    i) Make computer-side display: none;

    ii) Make home-screen display: flex;

    iii)Reset the game-board of both the player and the computer