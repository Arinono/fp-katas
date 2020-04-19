import test from 'ava'
import dropFlipAndReverseIt, { Friend } from './missyElliot'

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

test('Missy Elliot Friends Names', (assert) => {
  assert.deepEqual(
    dropFlipAndReverseIt(friends),
    [
      {
        name: 'llij',
        age: 30,
      },
      {
        name: 'bob',
        age: 32,
      },
      {
        name: 'lihp',
        age: 26,
      },
      {
        name: 'tap',
        age: 35,
      },
    ],
    'Should update each items name by making them all lowercase and reversing them'
  )
})
