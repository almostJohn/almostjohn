---
title: "Node.js Map Explained With Cookies"
date: "June 29, 2024"
readTime: "30min read"
---

## Intro

I keep seeing people having issues with understanding **Node.js** [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) class.

> 📝 **Note**
>
> The `Map` objects holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)) may be used as either a key or a value.

If that's enough for you to understand, you can stop reading here.

Have you ever tried to think like a program? What I mean by that is: Thinking about real world objects and how a program might interact with these objects can help fundamentally understanding intricacies that are hard to understand, if you just read the documention. If you haven't, let's change that!

Imagine a bakery where different types of cookies are stored in boxes. Each boxes has a label, and each label corresponds to a specific type of cookie. The baker needs an efficient way to manage these boxes, retrieve cookies, and sometimes sort them.

The bakery has a lot of boxes, you might say... a Collection of them.

Is this a terrible example to explain Map with? Probably. Will that stop me? Nope!

Cookies dough (got it, "dough", because... cookies...) Cookies are amazing. Not only can you touch them you can even eat them!

So: Understand this cookie analogy and you can apply it to any Map in and outside of Node.js! Instantly makes this sound more worthwhile, right? Great, let's start!

## Explanation using the Map class

The `Map` class in **Node.js** is like a smart organizer for the baker. It helps the baker to:

- Store cookies in labeled boxes (keys and values).
- Retrieve cookies from specific boxes using the labels.
- Check if a certain type of cookies is available.
- Get the total number of different types of cookies.
- Remove all cookies of a specific type if needed.
- Iterate through all boxes to list out or sort the cookies.

## The shape of (cookie) Map

The base structure in our example is the `Cookie`. Like in Node.js objects, Cookies have various properties you can sort and retrieve them by. A cookie instance might look something like this:

```js
Cookie {
  quantity: 20,
  price: 3.50,
  shape: 'round',
  ingredients: [
    'chocolate',
    'butter',
    'vanilla',
    'sugar',
    'salt',
    'flour',
    'baking soda'
  ],
}
```

Multiple cookies might be packed together inside a box. A cookie box has a flavor name to know what's exactly inside that box `.flavorName` and - obviously - a collection of information (ie: ingredients, shape, price, etc) of the cookies inside the box, `.cookies`. The structure may look something like this:

```js
CookieBox {
  cookies: Collection [Map],
  flavorName: 'Chocolate Chip'
}
```

The `.cookies` inside the box are a Collection. Collections, as Maps, map a specific, unique, key to a value. In this case, we use the `.flavorName` of each cookie box as a key. Most Collections are keyed by the objects `.id` property.

```js
Collection [Map] {
  'Chocolate Chip' => Cookie,
  'Oatmeal Raisin' => Cookie,
  'Peanut Butter' => Cookie,
  'Sugar Cookie' => Cookie,
  'Vanilla Cookie' => Cookie,
}
```

Now we add another layer. Our cookie stash has multiple boxes, and since we are already invested into Collections, let's use them for this, too! As key, we use the `.flavorName` of each box.

Your `cookieStash.boxes` map will look something like this:

```js
Collection [Map] {
  'Chocolate Chip' => Cookie,
  'Oatmeal Raisin' => Cookie,
  'Peanut Butter' => Cookie,
  'Sugar Cookie' => Cookie,
  'Vanilla Cookie' => Cookie,
}
```

Setup done, now let's get to work!

## Map.size

Map have a property `.size` which returns - you guessed it - the amount of elements inside the Map. So following the thought experiment `cookieStash.boxes.size` would return the number of cookie boxes in our stash. So that'd be how we find out when we need to bake again, by looking up the amount of boxes, who would've thought!

> 📝 **Note**
>
> You do not count the boxes every time! The `Map` has an inherent counter that gets updated everytime element are added or removed. This is somewhat important as counting things would take you going through the map element by element otherwise, which is very inefficient!

reference: [Map#size](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size)

## Map.get

_"So... we have a problem, the box that has a flavor name `Chocolate Chip` is missing a quality seal, could you retrieve it from the stack in the back please?"_ ~ Owner

Heckin sure you can! Since our Map of boxes are keyed with their flavor names, you can simply use the Map method
`.get(key)`
to retrieve the corresponding box. The key here is said in their flavor names.

> 📝 **Note**
>
> You don't go to the back and read each and every box, you simply get the right one. This is way faster operation than reading labels on all the boxes.

> 📢 **Important**
>
> Always use `.get(key)` if you want to retrieve by key, in Node.js most collections are keyed by id (as a string).

```js
const requestedBox = cookieBoxes.get("Chocolate Chip");
// returns the box mapped to flavor name 'Chocolate Chip'
```

reference: [Map#get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)

## Map.has

_"Is the box that has a flavor name of `Chocolate Chip` still in the stash?"_ ~ Owner

You go back to our list of boxes, check if the one keyed to `Chocolate Chip` is still there, and shout a "YES" to the front. We just returned a boolean, `true` and... yeah, that's exactly how `Map.has()` works.

```js
const boolean = cookieBoxes.has("Chocolate Chip");
// returns true or false depending on if the specific boxes is in the collection or not
```

reference: [Map#has](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)

## Map.delete

_"So... we have a problem, we don't have enough ingredients for `Sugar Cookie`, can you remove it from our stash in the back please?"_ ~ Owner

Sure, you can! Since our Map of boxes are keyed with their flavor names, so simply go to the back and use the Map method `.delete(key)` to delete the corresponding box.

> 📝 **Note**
>
> After deletion, the key-value pair is completely removed from the `Map` and will not be accessible.

> 📢 **Important**
>
> Ensure the key exists before calling `.delete()` method to avoid unnecessary operations.

```js
const requestedBox = cookieBoxes.delete("Sugar Cookie");
// returns true or false depending on whether the key existed. If the key existed and was successfully removed, it returns true; otherwise, it returns false
```

reference: [Map#delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)

## Map.forEach

_"Do we still have enough Oatmeal Raisin cookies, or do I need to bake some more?"_ ~ Owner

You know... you are talking about Oatmeal Raisin cookies, the answer to the second part of that question is "NO" and does not depend on the first part. Well let's check. A job is a job.

You go to the cookie stash, but you don't know how to check if there's enough quantity. Easy, I've got you. Let's iterate through the Map with the `forEach()` method.

> 📝 **Note**
>
> Iteration occurs in insertion order of keys.

> 📢 **Important**
>
> Always use `.forEach()` or `for...of` method when iterating a Collection [Map].

```js
// using forEach()
cookieBoxes.forEach((quantity, type) => {
	console.log(`The quantity of ${type} is ${quantity}`);
	// returns "The quantity of Oatmeal Raisins is 0"
});

// using for...of
for (const [type, quantity] of cookieBoxes) {
	console.log(`The quantity of ${type} is ${quantity}`);
	// returns "The quantity of Oatmeal Raisins is 0"
}
```

reference: [Map#forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)

## Wasn't even that bad, was it?

Now you know how `Map` works, go and apply it to whenever demands your app or project may throw to you!
