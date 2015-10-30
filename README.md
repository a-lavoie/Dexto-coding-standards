Under Node.js:

```

// Ref: http://book.mixu.net/node/ch6.html

// Constructor
function Foo(bar) {
  // always initialize all instance properties
  this.bar = bar;
  this.baz = 'baz'; // default value
}
var method = Foo.prototype;
// class methods
method.fooBar = function() {

};
// export the class
module.exports = Foo;
```

Instantiating a class is simple:

```
// constructor call
var object = new Foo('Hello');
```

