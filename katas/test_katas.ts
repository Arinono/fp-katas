import * as  assert from 'assert'
import * as chalk from 'chalk'
import kata1 from './1'
import kata2 from './2'
import kata3 from './3'

const printAssertion = source => chalk.blue(`
Running Assertion:

  ${chalk.white(source)}
`)

console.group(chalk.cyan('Kata 1'))

console.log(chalk.cyan(`
/**
 * Kata 1:
 * 
 * Given a list of friends, find the average
 * of them
 */
`))

const kata1Friends = [
  {
    name: 'Jill',
    age: 30,
  },
  {
    name: 'Bob',
    age: 32,
  },
  {
    name: 'Phil',
    age: 26,
  },
  {
    name: 'Pat',
    age: 35,
  },
]

console.log(printAssertion(`assert(kata1(kata1Friends) === 30.75)`))
assert(kata1(kata1Friends) === 30.75)
console.log(chalk.cyan('Passed!'))
console.groupEnd()


console.group(chalk.cyan('Kata 2'))

console.log(chalk.cyan(`
/**
 * Kata 2:
 * 
 * Create a new list of friends, with all of your friends
 * names capitalized and reversed
 */
`))

const kata2Friends = [
  {
    name: 'Jill',
    age: 30,
  },
  {
    name: 'Bob',
    age: 32,
  },
  {
    name: 'Phil',
    age: 26,
  },
  {
    name: 'Pat',
    age: 35,
  },
]

console.log(printAssertion(`
assert.deepEqual(kata2(kata2Friends), [
  {
    name: 'LLIJ',
    age: 30,
  },
  {
    name: 'BOB',
    age: 32,
  },
  {
    name: 'LIHP',
    age: 26,
  },
  {
    name: 'TAP',
    age: 35,
  },
])`))

assert.deepEqual(kata2(kata2Friends), [
  {
    name: 'LLIJ',
    age: 30,
  },
  {
    name: 'BOB',
    age: 32,
  },
  {
    name: 'LIHP',
    age: 26,
  },
  {
    name: 'TAP',
    age: 35,
  },
])

console.log(chalk.cyan('Passed!'))
console.groupEnd()


console.group(chalk.cyan('Kata 3'))

console.log(chalk.cyan(`
/**
 * Kata 3:
 * 
 * Create a { [id]: Friend } hash out of your
 * list of friends
 */
`))

const kata3Friends = [
  {
    id: '1',
    name: 'Jill',
    age: 30,
  },
  {
    id: '2',
    name: 'Bob',
    age: 32,
  },
  {
    id: '3',
    name: 'Phil',
    age: 26,
  },
  {
    id: '4',
    name: 'Pat',
    age: 35,
  },
]

console.log(printAssertion(`
assert.deepEqual(createFriendHash(kata3Friends), {
  1: kata3Friends[0],
  2: kata3Friends[1],
  3: kata3Friends[2],
  4: kata3Friends[3],
})`))

assert.deepEqual(kata3(kata3Friends), {
  1: kata3Friends[0],
  2: kata3Friends[1],
  3: kata3Friends[2],
  4: kata3Friends[3],
})

console.log(chalk.cyan('Passed!'))
console.groupEnd()