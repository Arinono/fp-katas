import test from 'ava'
import getAverageAge, { Friend } from './averageFriendsAge'

const friends: Friend[] = [
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

test('Average Friends Age', (assert) => {
  assert.is(
    getAverageAge(friends),
    30.75,
    'Should return the average of a list of friends'
  )
})
