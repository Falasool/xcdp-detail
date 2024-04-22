```js
<script>
  function Person(name) {
    //private
    this._name = name
  }
  Person.prototype = {
    getName: function () {
      return this.name
    },
  }
  function Student(name, id) {
    Person.call(this, name)
    this.id = id
  }
 //哪种正确
  Student.prototype = Person.prototype
  Student.prototype = new Person()
  Student.prototype = Object.create(Person.prototype)

  Student.prototype.getId = function () {
    return this.id
  }
</script>
```

第3个正确

这个写法会让 Student 和 Person 的 prototype 指向同一个内存地址，Student自己的原型上添加方法也会影响到Person的prototype

```js
Student.prototype = Person.prototype
```

把实例赋值给子类原型，导致继承了Person的私有属性`_name`

```js
 Student.prototype = new Person()
```

以Person.prototype为原型创建新对象，不影响Student在原型上添加方法

```js
 Student.prototype = Object.create(Person.prototype)
```

