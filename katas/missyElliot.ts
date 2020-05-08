import * as assert from 'assert'
import * as R from 'ramda'

/**
 * @kata
 * @version 0.0.1
 * @description Create a new list of friends, with all of your friends names lowercased and reversed
 */

export interface Friend {
  name: string
  age: number
}

const dropFlipAndReverseIt: (list: Friend[]) => Friend[] = (list) => list.map((val) => 
  ({ ...val, name: val.name.toLowerCase().split('').reverse().join('') }))

/**
 * Do not change below this line
 */

export default dropFlipAndReverseIt
