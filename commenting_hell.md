Don't comment old code, just delete it. 
------------

You're working on the team project and suddenly come accross with something like this:

    //public Person()
    //{
    //}
    //public Person(string firstName, string lastName)
    //{
    //    this.FirstName = firstName;
    //    this.LastName = lastName;
    //}
    
    //Note: Removed constructors in favor of a Factory approach and Automapper

    public static Person PersonFactory(PersonDTO dto)
    {
        return AutoMapper.Mapper.Map<Person>(dto);
    }

Many folks are afraid of deleting previously working code, and instead just comment it out. The reasoning behind this is that if something breaks, there's a way to go back to the previous working version. 

In reality this is a bad idea: You probably didn't change just one file, you changed the names of methods and all the files that depended on that method. That's what source control is there for. If you need to rollback those changes just revert that latest commit. 

Also, encountering a comment like this means that your team is probably not using unit tests.


_References:_

* Commenting out old code kills puppies http://darrell.mozingo.net/2011/07/28/commenting-out-old-code-kills-puppies/
* Stack Overflow Question: [Old Code in Comments](http://stackoverflow.com/questions/1022552/old-code-in-comments)
    
