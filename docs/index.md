# JoffreyJS
JoffreyJS is an abstraction layer built on top of mongoose, expressjs, angularjs and node.
The framework allows for rapid building of highly modular applications.

## Modules
Modules form one of the key tenets of JoffreyJS. You can think of modules as mini applications.

### Each module includes:

* Its own API (`/api`), consisting of:
	..* app.js - Primarily used for routing internal to the module
	..* controllers.js - The link between app.js and the modules models
	..* models.js - A layer for interacting with MongoDB, using mongoose
* A public folder (`/public`) for static assets
	..* img/ - images specific to the module
	..* js/ - home to the module's corresponding angularjs files
	..* styl/ - stylus files which get compiled to CSS
	..* css/ - compiled css files

### Route Structure
* A module's internal route can be accessed via `/modules/<module name>/<internal route>`
* Static files can be accessed via `/modules/<module name>/<static file>`

## Views
An application can contain any number of views. A view organises modules in a particular fashion, it determines the layout of modules. For example a blog may have a home page view, a post view, an archives view and an admin panel view. Each view may have modules different modules with different configurations, the post view may have a comments module whereas the homepage view might not. 

Joffrey detects modules inserted into a view and prepares its required assets accordingly, prior to rendering the view.
You can insert modules into jade or HTML using the `{{ <module name> }}` syntax. 

## Module States
Using our blog example again, perhaps you would like the home view to feature summaries of recent blog posts, and a blog page which displays the full posts - instead of creating two modules, you simply create two different states within the blog module. 
Within our page view we are able to specify which state a module loads with using the `{{ <module name> | <state> }}` syntax. 

## Module to Module communication
In our blog example there is a good chance a comments module would need to talk to a post example and vice versa. The module will need to know which post a comment is being added to. To accomplish this we can inject the post's service into the comments module.
This means the post modules api instantly becomes available to the comments module.
