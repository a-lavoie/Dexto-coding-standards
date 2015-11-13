# In Node.js:

## Activity: Coding

### Creating a class
```
// Ref: http://book.mixu.net/node/ch6.html

// Constructor
function Animal(bar) {
  // Always initialize all instance properties
  this.bar = bar;
  this.baz = 'baz'; // default value
}

var instance = Animal.prototype;
// class methods
instance.walk = function() {

};

// Constructor
function Animals(bar) {
  // Always initialize all instance properties
  this.collection = [];
}

var collection = Animals.prototype;
// class methods
collection.add = function() {
};

collection.findById = function() {
};

collection.remove = function() {
};


// export the class


module.exports.instance = Animal;
module.exports.collection = Animals;
```

Instantiating a class is simple:

```
// constructor call
var object = new Animal('Hello');
```

## Activity: Testing

Grunt usage:
## Setting the environment process
![alt tag](https://github.com/a-lavoie/Dexto-coding-standards/blob/master/docs/img/AmazonUsingRemoteServer.jpg)

## Development process
![alt tag](https://github.com/a-lavoie/Dexto-coding-standards/blob/master/docs/img/DevProcess.jpg)

## Koa Architecture
![alt tag](https://github.com/a-lavoie/Dexto-coding-standards/blob/master/docs/img/Architecture.jpg)


## The second largest heading (an <h2> tag)
…
###### The 6th largest heading (an <h6> tag)


* Item
* Item
* Item

- Item
- Item
- Item

1. Item 1
  1. A corollary to the above item.
  2. Yet another point to consider.
2. Item 2
  * A corollary that does not need to be ordered.
    * This is indented four spaces, because it's two spaces further than the item above.
    * You might want to consider making a new list.
3. Item 3

 [Visit GitHub!](https://www.github.com).



