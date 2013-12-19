from django.conf.urls.defaults import *
from django.conf.urls.i18n import i18n_patterns
from django.contrib import admin
from django.conf import settings

admin.autodiscover()

urlpatterns = i18n_patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('cms.urls')),
		# url(r'^blog/', include('zinnia.urls')),
		#url(r'^blog/', include('cmsplugin_blog.urls')),
		## handle site.com/blog
		#url(r'^blog', include('dragoman_blog.urls')),
		url(r'^blog/', include('dragoman_blog.urls')),
		url(r'^newswire/', include('cmsplugin_news.urls')),
		#url(r'^newswire/', include('cmsplugin_news.urls')),
		url(r'^comments/', include('django.contrib.comments.urls')),
)

if settings.DEBUG:
    urlpatterns = patterns('',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve',
        {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),
        url(r'', include('django.contrib.staticfiles.urls')),
    ) + urlpatterns

