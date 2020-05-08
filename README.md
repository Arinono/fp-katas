# FP Katas

## Overview

This repo houses the functional programming driven katas. These can be
used to explore the Ramda codebase, ease yourself into functional programming
concepts, or just warm up before moving onto an actual task for the day.

All Katas have access to [`ramda`](https://ramdajs.com/docs/) and the common
`node` packages. They must be `.ts` files.

## Katas

> _What is a Kata?_
>
> [We thought you might ask](https://en.wikipedia.org/wiki/Kata_(programming))

The first 3 katas are just paths for us to explore `ramda` and the learn the test
runner. Feel free to only focus on `Kata 4` if that is how you feel. You do you, boo-boo

---

### Kata 1: Am I Old Now?

<p align="center">
  <img src="https://pics.me.me/thumb_am-lout-oftouch-ill-hi-no-its-the-children-who-are-43435485.png" />
</p>

There's an idea that you are the average of your five closest friends. What that says about my
choice of friends in my formative years remains to be seen.

Today, we want to see what that tells us about our age. Let's find the _average_ of a list of
our friends.

Make `katas/averageFriendsAge.spec.ts` pass.

---

### Kata 2: Missy Elliot Friends

<p align="center">
  <img src="https://i2.wp.com/28.media.tumblr.com/tumblr_lxygzyiFqI1r98leoo1_500.gif?resize=500%2C281&quality=100" />
</p>

Who hasn't been blessed by [Missy Elliot](https://www.youtube.com/watch?v=cjIvu7e6Wq8) showing us how simple it is
to compose functionality to reach complex business requirements.

We want to take our friends and `Missy Elliot`-ify their names. Specifically, we want to put my thing down (_lowercase_), flip it and reverse it (_reverse_).

Make `katas/missyElliot.spec.ts` pass.

---

### Kata 3: Faster Friend Finder.

<p align="center">
  <img src="https://media2.giphy.com/media/l2Je66zG6mAAZxgqI/giphy.gif" />
</p>

We have a list of friends that we want to be able to look up, similar to how
we can look up words inside of a [dictionary](https://en.wikipedia.org/wiki/Associative_array). 

We need a way to take a list and create something that associates values by their `id` field.

Make `katas/createHash.spec.ts` pass.

---

### Kata 4: State -> Action -> State

<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvzku4Co5DYgPI_dYhvxdZSVbslf5WcXH6d0QM1uth99CCtE1c&usqp=CAU" />
</p>

Up until now, we've been learning how to use `ramda` or how to think in a functional way.
Now we get to reap the reward of our efforts. We get to apply the concepts in katas 1 - 3
to learn a paradigm for handling _mutable, shared state_. 

We have heard that _mutation_ is antithetical to functional programming and for the purist
out there, that's probably right. But for us, we don't want to be dogmatic but instead
pragmatic. We want to apply functional _ideas_ to _any_ codebase we are in. That means
we can use functional concepts and purity to do _impure_/_mutative_ things. We
just don't _mix_ them. 

The [`Flux`](https://facebook.github.io/flux/) architecture, especially the [`redux`](https://redux.js.org/)
implementation of it, allows us to _reason_ about our state in _predicatable_ ways as it enforces the
updates to be _pure_, _immutable_ updates.

We are not going to worry about _how_ any of the above works and instead focus on the
_reducer_ aspect of the `redux` architecture as it is that functional interface we are talking
about.

`katas/reducer.ts` defines an `enum` with a list of actions that an application might have

```ts
export enum ActionType {
  'ADD_USER',
  'UPDATE_USER',
  'REMOVE_USER',
  'ADD_USER_TO_FRIENDS',
  'REMOVE_USER_FROM_FRIENDS',
}
```

Inside of `katas/reducer.spec.ts`, we define actions that use those types:

```ts
const addUser = {
  type: ActionType.ADD_USER,
  payload: { /* ... */ },
}
```

A `reducer` is a function of `(State, Action) -> State`. Our goal with this Kata is to
take the actions and produce a new state that does what the action desires. As an example:

```ts
// Create the next state
const nextState = reducer(emptyState, addUser)

// Assert its shape
assert.deepEqual(
  nextState,
  withoutPhilusAsFriend,
  'Adding a friend to an empty state adds them to the IDs of User Domain'
)

// Assert that we created something
// new instead of mutating the passed
// in values
assert.false(
  nextState === emptyState
)
```


Make `katas/reducer.spec.ts` pass.

---

### Practice / Setup

We are using `ava` as our test runner. You can run all of the test files via `yarn test`. You can
also pass any flags that `ava` takes such as `--watch` (_`yarn test --watch`_) and they will be passed
to the `ava` command.