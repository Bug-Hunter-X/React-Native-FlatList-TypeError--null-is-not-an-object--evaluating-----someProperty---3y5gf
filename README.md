# React Native FlatList TypeError: null is not an object

This repository demonstrates a common error encountered when using FlatList in React Native:  `TypeError: null is not an object (evaluating '...someProperty')`.

This error usually occurs when trying to render a FlatList with data containing null or undefined values within nested objects.  The solution involves robust null and undefined checks to prevent accessing properties of null or undefined objects.

## Bug.js (Illustrates the Error)

The `Bug.js` file showcases the problem: it attempts to render a FlatList with data that might have missing values, leading to the TypeError. 

## BugSolution.js (Solution)

The `BugSolution.js` file demonstrates how to solve the issue. It uses optional chaining (?.) and nullish coalescing (??) to safely access properties, avoiding errors when encountering null or undefined values.