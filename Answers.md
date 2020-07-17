1. What problem does the context API help solve?

  - Context API is great at fixing the problem with prop drilling!  Unfortunately it does come with some drawbacks like making reusability much more difficult.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - Let's start with the store.  The store in redux contains our state for our application.  If we need some state, we just need to access the store and connect it to our      component.  The store is known as a single source of truth because that is where we can keep all our state for our application.
    - Reducers within Redux are functions that determine changes to an applications state.
    - Actions in Redux are packets of information that contain an action type and data that goes with it.  An action is basically an object with two properties, a type and an optional payload property.  Type explains the interaction happening and payload is the info or action being passed into your interaction.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  - Component state is state kept within a component and is not accessible from other components unless passed from props.
  - Application state is data within an application available to all components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  - Redux thunk is a middleware that provides the ability to handle asynchronous operations inside our action creators.  A thunk is basically a function returning a function so when an action creator is called, redux-thunk intercepts and acts on the returned data.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

  - My favorite right now is context API mostly because Redux is going to take a lot longer for me to fully understand and grasp.  Context API is great but is usablity is limited which makes redux a better form of state management in bigger applications.
