Djagazin - Django-cms based magazin
-----------------------------------
http://djagazin-dang.rhcloud.com/

* Openshift ready
* Semantic templating and content rendering (dev)
* Easy extendability

Components:
* cmsplugin-blog
* cmsplugin-news

cmsplugin-blog
-----------------------------------



News plugin for django-cms 2.x
-----------------------------------

This plugin was forked from cmsplugin-news prior to be used in vfossorg project. We try to maintain the code sothat it's possible to contribute bug fixes to upstream project.

Setup
-----------------------------------

* Install django-cms (if you haven't done so already)

* Checkout cmsplugin-news as an app inside vfossorg project: hg clone https://thuydang@bitbucket.org/thuydang/cmsplugin-news cmsplugin_news
* Add 'cmsplugin_news' to INSTALLED_APPS

* If you're using South execute `python manage.py migrate`, Otherwise run
  `python manage.py syncdb` within your project directory.
* In order to integrate the news-plugin with your website, create a page and add
  the news application (and optionally the news menu) to it by modifying the
  relevant "advanced settings" of it. OR
* Put a templatetag which is created to display news entries on the page.

Last tested with
----------------

* django-cms-2.2 and 2.3
* django: 1.3.4

History
-------

0.4:
    * New maintainer
    * RSS/Atom feed
    * CMS menu integration
    * Upgrade to django-cms 2.2 (and 2.3)

0.3:
    * Moved to beta phase
    * Tested with django-cms 2.0 final

0.2b:
    * Various bug fixes

0.2a/0.1a5:
    * Adds excerpt to news model
