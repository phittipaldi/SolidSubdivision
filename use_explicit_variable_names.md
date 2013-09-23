Use explicit variable names
------------

Setting up variable names like 'i' or 'temp' is bad code. It hampers readability for other members of your programming team. 

Programming languages support long variable names. `activeCustomerName` will always be better than `custName`


This also applies to lists and iterators. It's easy to setup a loop like so:
    
    //javascript code
    for (var i=0; i<myList.length; i++){
        //Actions to take here
    }
    
But it's better to write it like this:

    //javascript code
    for (var myListIterator=0; i<myList.length; i++){
        //Actions to take here
    }

Why?

* If you want to search your code, you will have many `i` results
* In languages like javascript, that don't handle variable scoping this can also lead to errors
* If you find yourself trying to write many loops, you will lookup a better way to declare them. Languages like ruby provide many iterator functions that read better than for and while loops. 

_References_

* Reading code is hard - Eric Lippert http://blogs.msdn.com/b/ericlippert/archive/2004/06/14/155316.aspx
* Programming Naming Conventions - Wikipedia http://en.wikipedia.org/wiki/Naming_convention_(programming)
* Good Variable Names - http://c2.com/cgi/wiki?GoodVariableNames
* Bad Variable Names - http://c2.com/cgi/wiki?BadVariableNames
* Stack Exchange discussions on variable naming:
    * [Is there an excuse for short variable names?](http://programmers.stackexchange.com/questions/176582/is-there-an-excuse-for-short-variable-names/176585)
    * [Why do most of us use `i` as a loop counter value](http://programmers.stackexchange.com/questions/86904/why-do-most-of-us-use-i-as-a-loop-counter-variable/86911)
    
    
