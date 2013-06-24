import datetime
from django.template import Library, Node
from django.conf import settings
from django import template
from django.contrib.auth import models as auth_models

from tagging.models import Tag

from cms.utils import get_language_from_request
from cmsplugin_blog.models import Entry, EntryTitle
from cms.models import Placeholder

from simple_translation.translation_pool import translation_pool
from simple_translation.utils import get_translation_filter_language

register = template.Library()

# http://www.b-list.org/weblog/2006/jun/07/django-tips-write-better-template-tags/
# blog post widget
@register.tag
def get_latest_entries(parser, token):
  bits = token.contents.split()
  if len(bits) != 4:
    raise TemplateSyntaxError, "(cmsplugin_blog) get_latest_entries tag takes exactly 3 arguments)"
  if bits[2] != 'as':
    raise TemplateSyntaxError, "second argument to the get_latest_links tag must be 'as'"
  return LatestEntriesNode(bits[1], bits[3])

class LatestEntriesNode(Node):
  def __init__(self, num, varname):
    self.num, self.varname = num, varname

  def render(self, context):
    request = context["request"]
    language = get_language_from_request(request)
    kw = get_translation_filter_language(Entry, language)
    context[self.varname] = Entry.published.filter(**kw)[:self.num]
    return ''


@register.inclusion_tag('cmsplugin_blog/entry_list_1_snippet.html', takes_context=True)
def render_entries_widget(context, entry_num):
    request = context["request"]
    language = get_language_from_request(request)
    kw = get_translation_filter_language(Entry, language)

    return {
        'entries': Entry.published.filter(**kw)[0:entry_num],
    }


@register.inclusion_tag('cmsplugin_blog/month_links_snippet.html', takes_context=True)
def render_month_links(context):
    request = context["request"]
    language = get_language_from_request(request)
    kw = get_translation_filter_language(Entry, language)
    return {
        'dates': Entry.published.filter(**kw).dates('pub_date', 'month'),
    }

@register.inclusion_tag('cmsplugin_blog/tag_links_snippet.html', takes_context=True)
def render_tag_links(context):
    request = context["request"]
    language = get_language_from_request(request)
    kw = get_translation_filter_language(Entry, language)
    filters = dict(is_published=True, pub_date__lte=datetime.datetime.now(), **kw)
    return {
        'tags': Tag.objects.usage_for_model(Entry, filters=filters)
    }

@register.inclusion_tag('cmsplugin_blog/author_links_snippet.html', takes_context=True)
def render_author_links(context, order_by='username'):
    request = context["request"]
    language = get_language_from_request(request)
    info = translation_pool.get_info(Entry)
    model = info.translated_model
    kw = get_translation_filter_language(Entry, language)
    return {
        'authors': auth_models.User.objects.filter(
            pk__in=model.objects.filter(
                entry__in=Entry.published.filter(**kw)
            ).values('author')
        ).order_by(order_by).values_list('username', flat=True)
    }

@register.filter
def choose_placeholder(placeholders, placeholder):
    try:
        return placeholders.get(slot=placeholder)
    except Placeholder.DoesNotExist:
        return None


@register.inclusion_tag('admin/cmsplugin_blog/admin_helpers.html')
def admin_helpers():
    return {
        'use_missing': 'missing' in settings.INSTALLED_APPS,
    }
