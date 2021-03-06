# -*- coding: utf-8 -*-
import os

gettext = lambda s: s

PROJECT_DIR = os.path.abspath(os.path.dirname(__file__))

DEBUG = True
TEMPLATE_DEBUG = DEBUG

ADMINS = (
    # ('Your Name', 'your_email@domain.com'),
)

MANAGERS = ADMINS

CMS_LANGUAGES = {
		1: [
			{
				'code': 'en',
				'name': gettext('English'),
				'fallbacks': ['de', 'fr'],
				'public': True,
				'hide_untranslated': True,
				'redirect_on_fallback':False,
				},
			{
				'code': 'de',
				'name': gettext('Deutsch'),
				'fallbacks': ['en', 'fr'],
				'public': True,
				},
			{
				'code': 'fr',
				'name': gettext('French'),
				'public': False,
				},
			],
		2: [
			{
				'code': 'nl',
				'name': gettext('Dutch'),
				'public': True,
				'fallbacks': ['en'],
				},
			],
		'default': {
			'fallbacks': ['en', 'de', 'fr'],
			'redirect_on_fallback':True,
			'public': False,
			'hide_untranslated': False,
			}
		}

LANGUAGES = [
    ('en', 'English'),
]

DATABASES = {
		'default': {
			'ENGINE': 'django.db.backends.sqlite3',
			'NAME': os.path.join(PROJECT_DIR, 'sqlite3.db'),
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

USE_TZ = True
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
# Note: The app_directories template loader loads templates from the INSTALLED_APPS template directory, while the filesystem loader loads them from the templates directory configured in your TEMPLATE_DIRS settings.
#
#Switching the two of them makes a huge difference because if you have custom templates in your app it will not load if the app_directories is at the top. If the filesystem loader is at the top, django will look for a template in your template directory first before loading the default one from the installed_apps.

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
		'django.middleware.locale.LocaleMiddleware',
		'django.middleware.doc.XViewMiddleware',
    'cms.middleware.page.CurrentPageMiddleware',
    'cms.middleware.user.CurrentUserMiddleware',
    'cms.middleware.toolbar.ToolbarMiddleware',
    #'cmsplugin_blog.middleware.MultilingualBlogEntriesMiddleware',
		'cms.middleware.language.LanguageCookieMiddleware',
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
		('template_1.html', 'Template One'),
		# ('blog.html', 'Template blog'),
		#('new_theme/templates/new_theme.html', 'new_theme'),
		('_extend_theme_proxy.html', 'new_theme'),
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
    'sekizai',
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
    #'cms.plugins.googlemap',
## cmsplugin-blog
#'cmsplugin_blog',
		'simple_translation',
## cmsplugin_dragoman
    'cmsplugin_dragoman',
    'dragoman_blog',
    'taggit',
#'staticfiles',
    'tagging',
    'missing',
		'guardian', # optional
		'easy_thumbnails',
# cmsplugin-news
		'cmsplugin_news',
# debug-toolbar
		'debug_toolbar',
# cmsplugin_vfoss_project
		'cmsplugin_vfoss_project',
# versioning content
#		'reversion',
)

JQUERY_JS = 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'
JQUERY_UI_JS = 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/jquery-ui.min.js'
JQUERY_UI_CSS = 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/themes/smoothness/jquery-ui.css'

## cmsplugin-blog DISABLED
#CMSPLUGIN_BLOG_PLACEHOLDERS = ('blog_excerpt', 'blog_plugin', 'blog_content')

## cmsplugin-dragoman blog
DRAGOMAN_BLOG_ENTRY_MODEL = (
	'cmsplugin_dragoman.dragoman_models.Entry',
	'cmsplugin_dragoman'
)

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
