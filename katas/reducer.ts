import * as assert from 'assert'
import * as R from 'ramda'

/**
 * @kata
 * @version 0.0.1
 * @description Create a reducer of (State, Action) => State that satisfies all ActionType
 */

/**
 * What type of actions we are going to implement
 */
export enum ActionType {
  'ADD_USER',
  'UPDATE_USER',
  'REMOVE_USER',
  'ADD_USER_TO_FRIENDS',
  'REMOVE_USER_FROM_FRIENDS',
}

/**
 * Speaking of Action, what are they?
 */
type Action = {
  type: ActionType
  payload: any
}

/**
 * We are going to say that we have different
 * slices of global state
 */
interface Domain<T> {
  /**
   * Domains have some { [id]: DomainValue } hash
   */
  ids: {
    [x: string]: T
  }
}

/**
 * We are dealing with _some_ values, possibly from
 * an API, some DB, or made up. What's important is
 * that we can expect them to have these values.
 */
interface User {
  id: string
  name: string
  age: number
}

/**
 * Our UsersDomain is a Domain that also has
 * a list of friends, which are pointers to
 * our data
 */
interface UsersDomain extends Domain<User> {
  friends: string[]
}

/**
 * Our global state is a { [DomainName]: Domain } hash
 */
interface State {
  users: UsersDomain
}

/**
 * A Reducer takes in some state and action and returns the new
 * state value based on it
 */
type Reducer = (state: State, action: Action) => State

const reducer: Reducer = (s, a) => s

export default reducer
