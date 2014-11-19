Derby FastClick
===============

A [Derby JS](http://derbyjs.com) [FastClick](https://github.com/ftlabs/fastclick) component to remove click delay on touch browsers.

Installation
------------

    $ npm install d-fastclick --save

Usage
-----

Create a view:

    <index: element="fastclick">
      <!-- empty -->

Associate your view with the component:

    app.component('fastclick', require('d-fastclick'));

Place your view within the body element:

    <Body:>
      <fastclick options="{{_page.fastclick}}"></fastclick>

Options
-------

Refer to the FastClick documentation/source code for a list of options.

Considerations
--------------

FastClick is attached to the body element.
While this is the typical use case, this may not always be ideal.

I'm not aware of a best practice for passing elements to components.
If there is one, then I'll gladly make the attached element configurable.
