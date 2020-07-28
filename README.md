Match 'Em! [(Demo)](https://match-em.netlify.app/)
============

Overview 
-------------

**Match 'Em!** is a simple memory game created for submission as my solo project before joining Voyage cohort 21 of [Chingu](https://www.chingu.io/). The user clicks on cards two at a time, turning them over to reveal different symbols. The game is won if all 8 pairs are successfully matched within the 20 turn limit.


Features
------------
- Cards are shuffled on the start of each new game
- Flip cards to reveal matching pairs
- When two cards are flipped, logic leaves them up on a match, or flips them back over after a 1.5 second delay.
- Disables board during key moments to prevent clicking more than two cards



Running the project
----------------
The game is hosted for play [here](https://match-em.netlify.app/). To run it locally, fork and clone the repo. cd into the directory. Run `yarn install` and then `yarn start`.


Dependencies
---------
Dependencies include but are not limited to:

- react
- react-card-flip
- react-responsive
- semantic-ui-react
