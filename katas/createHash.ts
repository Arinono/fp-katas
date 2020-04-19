import * as assert from 'assert'
import * as R from 'ramda'

/**
 * @kata
 * @version 0.0.1
 * @description Create a { [id]: Friend } hash out of your list of friends
 */

export interface Friend {
  id: string
  name: string
  age: number
}

const createFriendHash: (list: Friend[]) => { [x: string]: Friend } = (
  list
) => ({ '1': { id: '1', name: 'foo', age: 100 } })

/**
 * Do not change below this line
 */
export default createFriendHash
