Use explicit names for your methods and procedures
------------

* A good name should describe the real purpose of the method or procedure.

* Methods that don't return any values, should be named with a verb. e.g. "calculateTax" or  "makePizza".

* Methods that DO return values, should use sentences that describe the object or value to be returned. e.g.: "isActive" or "getCustomer". 

* Learn the code conventions of the language you're using. To name a few examples:
    * Ruby convention appends a `?` on methods that return boolean.
    * Javascript convention dictates all methods use camelCase, unless you're declaring a constructor
    * Python convention dictates that any method named `__likeThisOne__` is usually something that's part of the core framework and shouldn't be overwritten

* Never use generic names. "manage" or "customerProcess" are awful names; someone reading the code the first time will have no idea what the method does on a first glance. 


_References_

* [Function and Method Naming Standards](http://www.igloocoder.com/2009/function-and-method-naming-standards)
* [Needs more references]