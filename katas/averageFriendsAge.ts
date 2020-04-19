import * as assert from 'assert'
import * as R from 'ramda'

/**
 * @kata
 * @version 0.0.1
 * @description Find the average of your friends age
 */

export interface Friend {
  name: string
  age: number
}

const getAverageAge: (list: Friend[]) => number = (list) => 1

/**
 * Do not change below this line
 */
export default getAverageAge
