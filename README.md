Under Node.js:

```
// Constructor
function Foo(bar) {
  // always initialize all instance properties
  this.bar = bar;
  this.baz = 'baz'; // default value
}
// class methods
Foo.prototype.fooBar = function() {

};
// export the class
module.exports = Foo;
```

Instantiating a class is simple:

```
// constructor call
var object = new Foo('Hello');
```

