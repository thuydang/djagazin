# -*- coding: utf-8 -*-
import os

gettext = lambda s: s

PROJECT_DIR = os.path.abspath(os.path.dirname(__file__))


# a setting to determine whether we are running on OpenShift
ON_OPENSHIFT = False
if os.environ.has_key('OPENSHIFT_REPO_DIR'):
    ON_OPENSHIFT = True

DEBUG = True
TEMPLATE_DEBUG = DEBUG

ADMINS = (
    # ('Your Name', 'your_email@domain.com'),
)

MANAGERS = ADMINS

LANGUAGES = [('en', 'en')]
DEFAULT_LANGUAGE = 0

if ON_OPENSHIFT:
# os.environ['OPENSHIFT_DB_*'] variables can be used with databases created
    # with rhc-ctl-app (see /README in this git repo)
    DATABASES = {
        'default': {
            #'ENGINE': 'django.db.backends.mysql', # Add 'postgresql_psycopg2', 'postgresql', 'mysql', 'sqlite3' or 'oracle'.
            #'NAME': os.environ['OPENSHIFT_APP_NAME'], # Or path to database file if using sqlite3.
            #'USER': os.environ['OPENSHIFT_DB_USERNAME'], # Not used with sqlite3.
            #'PASSWORD': os.environ['OPENSHIFT_DB_PASSWORD'], # Not used with sqlite3.
            #'HOST': os.environ['OPENSHIFT_DB_HOST'], # Set to empty string for localhost. Not used with sqlite3.
            #'PORT': os.environ['OPENSHIFT_DB_PORT'], # Set to empty string for default. Not used with sqlite3.
						'ENGINE': 'django.db.backends.sqlite3',
						'NAME': os.path.join(os.environ['OPENSHIFT_DATA_DIR'], 'sqlite3.db'),
						'USER': '',
						'PASSWORD': '',
						'HOST': '',
						'PORT': '',
        }
    }

		connect('djagazin',
            username=os.environ['OPENSHIFT_MONGODB_DB_USERNAME'],
            password=os.environ['OPENSHIFT_MONGODB_DB_PASSWORD'],
            host=os.environ['OPENSHIFT_MONGODB_DB_HOST'],
            port=int(os.environ['OPENSHIFT_MONGODB_DB_PORT']))
else:
	# Use this for your local settings.

		DATABASES = {
				'default': {
					'ENGINE': 'django.db.backends.sqlite3',
					'NAME': os.path.join(PROJECT_DIR, 'mycms.db'),
					#'ENGINE': 'django.db.backends.mysql',
					#'NAME': 'thuydang_vfosscms',
					#'USER': 'vfosscmsdb',
					#'PASSWORD': 'vfosscmsdb',
					#'HOST': '',
					#'PORT': '',
					}
		}

		# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# On Unix systems, a value of None will cause Django to use the same
# timezone as the operating system.
# If running in a Windows environment this must be set to the same as your
# system time zone.
TIME_ZONE = 'America/Chicago'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'en-us'

# change 2 when new site is created.
SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale
USE_L10N = True

# Absolute filesystem path to the directory that will hold user-uploaded files.
# Example: "/home/media/media.lawrence.com/"
MEDIA_ROOT = os.path.join(PROJECT_DIR, 'media')

STATIC_ROOT = os.path.join(PROJECT_DIR, 'static')

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com", "http://example.com/media/"
MEDIA_URL = '/media/'

STATIC_URL = '/static/'

# URL prefix for admin media -- CSS, JavaScript and images. Make sure to use a
# trailing slash.
# Examples: "http://foo.com/media/", "/media/".
ADMIN_MEDIA_PREFIX = '/static/admin/'

# Make this unique, and don't share it with anybody.
SECRET_KEY = '0r6%7gip5tmez*vygfv+u14h@4lbt^8e2^26o#5_f_#b7%cm)u'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

STATICFILES_DIRS = (
	#os.path.join(PROJECT_DIR, 'static_dev'),
	os.path.join(PROJECT_DIR, 'themes'),
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'cms.middleware.multilingual.MultilingualURLMiddleware',
    'cms.middleware.page.CurrentPageMiddleware',
    'cms.middleware.user.CurrentUserMiddleware',
    'cms.middleware.toolbar.ToolbarMiddleware',
    'cmsplugin_blog.middleware.MultilingualBlogEntriesMiddleware',
		'debug_toolbar.middleware.DebugToolbarMiddleware',

)

TEMPLATE_CONTEXT_PROCESSORS = (
	'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.i18n',
    'django.core.context_processors.request',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'cms.context_processors.media',
    'sekizai.context_processors.sekizai',
)

THUMBNAIL_PROCESSORS = (
	'easy_thumbnails.processors.colorspace',
	'easy_thumbnails.processors.autocrop',
	#'easy_thumbnails.processors.scale_and_crop',
	'filer.thumbnail_processors.scale_and_crop_with_subject_location',
	'easy_thumbnails.processors.filters',
)

CMS_TEMPLATES = (
		# ('template_1.html', 'Template One'),
		# ('blog.html', 'Template blog'),
		('vfoss_org_v01/templates/index.html', 'vfoss_2col'),
		('ar2_v1/templates/ar2_index.html', 'ar2_2col'),
		('wp_clear3/templates/wp_clear3_content_sidebar_wide.html', 'wp_clear3_2col'),
)

ROOT_URLCONF = 'djagazin.urls'

TEMPLATE_DIRS = (
    # os.path.join(PROJECT_DIR, 'templates'),
    os.path.join(PROJECT_DIR, 'themes'),
)

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.comments',
    'django.contrib.admin',
    'django.contrib.staticfiles',
    'cms',
    'menus',
    'mptt',
    'south',
    'filer',
    'cmsplugin_filer_file',
    'cmsplugin_filer_folder',
    'cmsplugin_filer_image',
    'cmsplugin_filer_teaser',
    'cmsplugin_filer_video',
    'cms.plugins.text',
## disabled due to filer
#'cms.plugins.picture',
#'cms.plugins.file',
##
    'cms.plugins.link',
    'cms.plugins.snippet',
    'cms.plugins.googlemap',
    'sekizai',
# cmsplugin-blog
    'cmsplugin_blog',
    'simple_translation',
#'staticfiles',
    'tagging',
    'missing',
		'guardian', # optional
		'easy_thumbnails',
# cmsplugin-news
		'cmsplugin_news',
# debug-toolbar
		'debug_toolbar',
)

JQUERY_JS = 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'
JQUERY_UI_JS = 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/jquery-ui.min.js'
JQUERY_UI_CSS = 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/themes/smoothness/jquery-ui.css'

# cmsplugin-blog
CMSPLUGIN_BLOG_PLACEHOLDERS = ('blog_excerpt', 'blog_plugin', 'blog_content')

# cmsplugin-news

# django-guardian
ANONYMOUS_USER_ID = '999'

# staticfiles
STATICFILES_FINDERS = (
		'django.contrib.staticfiles.finders.FileSystemFinder',
		'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#    'django.contrib.staticfiles.finders.DefaultStorageFinder',
)

# debug-toolbar
INTERNAL_IPS = ('127.0.0.1',)

DEBUG_TOOLBAR_CONFIG = {
    'SHOW_TEMPLATE_CONTEXT': True,
}
