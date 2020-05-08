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
  const nextState = reducer(emptyState, addUser)

  assert.deepEqual(
    nextState,
    withoutPhilusAsFriend,
    'Adding a friend to an empty state adds them to the IDs of User Domain'
  )

  // We cannot _mutate_ the state given
  // but instead only create a new one
  assert.false(
    nextState === emptyState
  )
})

test('Update User', (assert) => {
  const nextState = reducer(withPhilusAsFriend, updateUser) 

  assert.deepEqual(nextState, {
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

  assert.false(
    nextState === withPhilusAsFriend
  )
})

test('Remove User', (assert) => {
  const nextState = reducer(withPhilusAsFriend, removeUser)

  assert.deepEqual(
    nextState,
    emptyState,
    'Removing a friend from both the IDS and Friends list'
  )

  assert.false(
    nextState === withPhilusAsFriend
  )
})

test('Add User To Friends', (assert) => {
  const nextState = reducer(withoutPhilusAsFriend, addUserToFriends)

  assert.deepEqual(
    nextState,
    withPhilusAsFriend,
    'Adds the friends ID to the Friends list'
  )

  assert.false(
    nextState === withoutPhilusAsFriend
  )
})

test('Remove User From Friends', (assert) => {
  const nextState = reducer(withPhilusAsFriend, removeUserFromFriends)

  assert.deepEqual(
    nextState,
    withoutPhilusAsFriend,
    'Removes the ID from the Friends list without touching it in the IDs'
  )

  assert.false(
    nextState === withPhilusAsFriend
  )
})
