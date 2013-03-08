Django-cms based magazine for vfoss.org
=======================================

Combine diverse cmsplugins for blog, news-wire, and additional apps for a community website.

Setup
-----

* Install django-cms (if you haven't done so already)

* Checkout vfossorg project (this project): git clone https://thuydang@bitbucket.org/thuydang/vfossorg_pj
* Checkout and install additional plugins. e.g. cmsplugin_news, etc.
   * https://thuydang@bitbucket.org/thuydang/cmsplugin-news
   * https://thuydang@bitbucket.org/thuydang/cmsplugin-projects

Setup plugins
-------------
* Checkout the plugins to a working directory (for dev, test..). Couldbe inside vfossorg_pj

* Put dest-dir on PYTHONPATH otherwise there is error message.
(vfoss_env)[td@localhost vfoss_org]$ export PYTHONPATH=/home/td/workspace/vfossorg_pj/vfoss_org/ <-- dest_dir
(vfoss_env)[td@localhost vfoss_org]$ python setup.py install --install-purelib=dest_dir

* Resulting folder structure:
vfossorg_pj
├── cmsplugin-news
│   ├── build
│   ├── cmsplugin_news
│   ├── cmsplugin_news.egg-info
│   ├── dist
│   ├── LICENSE.txt
│   ├── MANIFEST.in
│   ├── README.rst
│   ├── runtests.py
│   ├── setup.py
│   ├── test_setup
│   └── tox.ini
├── docs
│   └── ...
├── LICENSE.txt
├── MANIFEST.in
├── nogit
│   └── ...
├── README.md
├── README.rst
├── vfoss_env
│   └── ...
└── vfoss_org
    ├── apache
    ├── cmsplugin_blog
    ├── cmsplugin_blog-1.1.2-py2.7.egg-info
    ├── cmsplugin_news-0.4.1-py2.7.egg
    ├── django_mptt-0.5.2-py2.7.egg-info
    ├── easy-install.pth
    ├── git_repo_bitbucket
    ├── manage.py
    ├── mptt
    ├── requirements
    ├── site.py
    ├── site.pyc
    └── vfoss_org



Last tested with
----------------

* django-cms-2.2 and 2.3
* django: 1.3.4

History
-------

