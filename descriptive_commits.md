When commiting code, ALWAYS use a descriptive message
------------

It doesn't matter how trivial the change you're pushing to your source control server, always leave a descriptive message:

* It will let others quickly now what was changed
* It helps with merge operations
* It will help you search the revision history in case you need to rollback to a previous version. 


Structure your commit message like this:

<pre>
Summarize clearly in one line what the commit is about

Describe the problem the commit solves or the use
case for a new feature. Justify why you chose
the particular solution.

Also, let everyone know if this change may introduce
side-effects to working code if that's the case.
</pre>


_References_: 

* [Cristopher Finke - Reminiscing about old code](http://www.chrisfinke.com/2013/06/13/old-code/)
* [Stack Overflow - git commit standard ](http://stackoverflow.com/questions/15324900/standard-to-follow-when-writing-git-commit-messages)
* [Whot-T - Great blog post about commit messages](http://who-t.blogspot.de/2009/12/on-commit-messages.html)
* [Giant Robots - 5 useful tips](http://robots.thoughtbot.com/post/48933156625/5-useful-tips-for-a-better-commit-message)
* [Open Stack - git commit good practice](https://wiki.openstack.org/wiki/GitCommitMessages)
* [Erlang/OTP - Writing good commit messages](https://github.com/erlang/otp/wiki/Writing-good-commit-messages)