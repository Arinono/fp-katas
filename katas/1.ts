import * as assert from 'assert'
import * as R from 'ramda'

/**
 * @kata
 * @version 0.0.1
 * @description Find the average of your friends age
 */

interface Friend {
  name: string
  age: number
}

const getTotalFor = R.curryN(2, (key, list) =>
  R.pipe(R.map(R.prop(key)), R.reduce(R.add, 0))(list)
)

const getAverageOf = R.curryN(2, (key, list) => {
  const getTotal = getTotalFor(key)

  return R.divide(getTotal(list), R.length(list))
})

const getAverageAge: (list: Friend[]) => number = getAverageOf('age')

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

// const average = getAverageAge(friends)

// assert(average === 30.75)

export default getAverageAge 