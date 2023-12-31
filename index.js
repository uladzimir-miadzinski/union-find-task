/**
 * Given a set of N objects.
 * Union command: connect two objects.
 * Find/connected query: is there a path connecting the two objects?
 * 
 * 0--1--2  3--4
 * |  |  |  |  |
 * 5--6  7  8  9
 */

function union() {
  // your code goes here...
}

function connected() {
  // your code goes here...
}

union(4, 3)
union(3, 8)
union(6, 5)
union(9, 4)
union(2, 1)
connected(0, 7) // false
connected(8, 9) // true
union(5, 0)
union(7, 2)
connected(0, 7) // true
union(1, 0)
union(6, 1)