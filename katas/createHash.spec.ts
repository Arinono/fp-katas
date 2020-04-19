import test from 'ava'
import createFriendHash, { Friend } from './createHash'

const friends: Friend[] = [
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

test('Create a Friend Hash', (assert) => {
  assert.deepEqual(
    createFriendHash(friends),
    {
      1: friends[0],
      2: friends[1],
      3: friends[2],
      4: friends[3],
    },
    'Creates an object that maps the ids to their underlying objects'
  )
})
