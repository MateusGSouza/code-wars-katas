# Instructions

This kata is all about adding numbers.

You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

```
  add(3,4,6); 
  /*
  returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
  */
```

Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.

Example
```
  add(); //=> 0
  add(1,2,3); //=> 3
  add(1,4,-6,20); //=> 6
```

Credit: [shakib609](https://www.codewars.com/users/shakib609)


## My view

This one was a bit confusing at first. It was not so clear to me, but every argument must be divided by its "index", starting at 1. 

All in all, it was a fun exercise and a good way to practice.