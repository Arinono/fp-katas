import * as assert from 'assert'
import * as R from 'ramda'

/**
 * @kata
 * @version 0.0.1
 * @description Create a new list of friends, with all of your friends names capitalized and reversed
 */

interface Friend {
  name: string
  age: number
}

const uppercaseAndReverse = R.compose(
  R.join(''),
  (list) => list.reverse(),
  R.split(''),
  R.toUpper
)

const friendNameLens = R.lensProp('name')

const dropFlipAndReverseIt: (list: Friend[]) => Friend[] = R.map(
  R.over(friendNameLens, uppercaseAndReverse)
)

/**
 * Do not change below this line
 */
// const friends: Friend[] = [
//   {
//     name: 'Jill',
//     age: 30,
//   },
//   {
//     name: 'Bob',
//     age: 32,
//   },
//   {
//     name: 'Phil',
//     age: 26,
//   },
//   {
//     name: 'Pat',
//     age: 35,
//   },
// ]

// assert.deepEqual(dropFlipAndReverseIt(friends), [
//   {
//     name: 'LLIJ',
//     age: 30,
//   },
//   {
//     name: 'BOB',
//     age: 32,
//   },
//   {
//     name: 'LIHP',
//     age: 26,
//   },
//   {
//     name: 'TAP',
//     age: 35,
//   },
// ])

export default dropFlipAndReverseIt