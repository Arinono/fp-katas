import * as assert from 'assert'
import * as R from 'ramda'

/**
 * @kata
 * @version 0.0.1
 * @description Create a { [id]: Friend } hash out of your list of friends
 */

interface Friend {
  id: string
  name: string
  age: number
}

const createFriendHash: (list: Friend[]) => { [x: string]: Friend } = R.reduce(
  (a, c) => R.merge(a, { [c.id]: c }),
  {}
)

/**
 * Do not change below this line
 */
// const friends: Friend[] = [
//   {
//     id: '1',
//     name: 'Jill',
//     age: 30,
//   },
//   {
//     id: '2',
//     name: 'Bob',
//     age: 32,
//   },
//   {
//     id: '3',
//     name: 'Phil',
//     age: 26,
//   },
//   {
//     id: '4',
//     name: 'Pat',
//     age: 35,
//   },
// ]

// assert.deepEqual(createFriendHash(friends), {
//   1: friends[0],
//   2: friends[1],
//   3: friends[2],
//   4: friends[3],
// })

export default createFriendHash