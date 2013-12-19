from django.conf.urls import patterns, include, url
import views

urlpatterns = patterns('',
    url(r'^$', views.ListProjectView.as_view(), name='project-list'),
)
