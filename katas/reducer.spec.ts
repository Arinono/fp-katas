import test from 'ava'
import reducer, { ActionType } from './reducer'

const dummyUserID = '123-456'

/**
 * The Actions we need to verify work as expected
 */
const addUser = {
  type: ActionType.ADD_USER,
  payload: {
    id: dummyUserID,
    name: 'Philus',
    age: 40,
  },
}

const updateUser = {
  type: ActionType.UPDATE_USER,
  payload: {
    id: dummyUserID,
    name: 'Juniper',
  },
}

const removeUser = {
  type: ActionType.REMOVE_USER,
  payload: {
    id: dummyUserID,
  },
}

const addUserToFriends = {
  type: ActionType.ADD_USER_TO_FRIENDS,
  payload: {
    id: dummyUserID,
  },
}

const removeUserFromFriends = {
  type: ActionType.REMOVE_USER_FROM_FRIENDS,
  payload: {
    id: dummyUserID,
  },
}

/**
 * Given some empty state
 */
const emptyState = {
  users: {
    ids: {},
    friends: [],
  },
}

/**
 * And two helper states
 */
const withPhilusAsFriend = {
  users: {
    ids: {
      [dummyUserID]: {
        id: dummyUserID,
        name: 'Philus',
        age: 40,
      },
    },
    friends: [dummyUserID],
  },
}

const withoutPhilusAsFriend = {
  users: {
    ids: {
      [dummyUserID]: {
        id: dummyUserID,
        name: 'Philus',
        age: 40,
      },
    },
    friends: [],
  },
}

test('Add User', (assert) => {
  assert.deepEqual(
    reducer(emptyState, addUser),
    withoutPhilusAsFriend,
    'Adding a friend to an empty state adds them to the IDs of User Domain'
  )
})

test('Update User', (assert) => {
  assert.deepEqual(reducer(withPhilusAsFriend, updateUser), {
    users: {
      ids: {
        [dummyUserID]: {
          id: dummyUserID,
          name: 'Juniper',
          age: 40,
        },
      },
      friends: [dummyUserID],
    },
  })
})

test('Remove User', (assert) => {
  assert.deepEqual(
    reducer(withPhilusAsFriend, removeUser),
    emptyState,
    'Removing a friend from both the IDS and Friends list'
  )
})

test('Add User To Friends', (assert) => {
  assert.deepEqual(
    reducer(withoutPhilusAsFriend, addUserToFriends),
    withPhilusAsFriend,
    'Adds the friends ID to the Friends list'
  )
})

test('Remove User From Friends', (assert) => {
  assert.deepEqual(
    reducer(withPhilusAsFriend, removeUserFromFriends),
    withoutPhilusAsFriend,
    'Removes the ID from the Friends list without touching it in the IDs'
  )
})
