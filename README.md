# Simple Static Website Generator (Python/Jinja2)
A simple static website generator that renders webpages using [Jinja2](http://jinja.pocoo.org/docs/2.10/). It is useful to build a simple static website without a database layer, easy to maintain and to generate.

If you want to avoid using a framework (such as [Django](https://www.djangoproject.com/)), but also need even simpler solution than [Pelican](https://blog.getpelican.com/), this is your code!

## Install and Dependencies
You need to have [Jinja2](http://jinja.pocoo.org/docs/2.10/) for running the code. You can do it by:

```
pip install jinja2
```
or

```
pip install -r requitements.txt
```

## Configure your Site

1. Place your HTML files (template) in the *src* folder. Remember you can use template inheritance, as Jinja2 is used to render the template (see [docs](http://jinja.pocoo.org/docs/2.10/templates/#template-inheritance) for more information).

2. You can use the *data.json* to pass data to specific HTML templates. See the example site provided ([davidpaule.es](http://davidpaule.es/)) as a starting point.

3. Test you site by running a local server:

```
make server
```

## Generate Static Site
Once you have created your template, you are ready to generate your static website by running:
```
make build
```
you will find your rendered website in the *output* folder.

## Deploy your site
After building your site, you need to upload the files in the *output* folder yo your server. If you have a [Github Page](https://pages.github.com/), you can run:
```
make deploy
```
*Note:* First, you need to configure your Github page and create a repository. You can start by [following](https://guides.github.com/features/pages/) this guidelines.
