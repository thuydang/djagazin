#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
An example of extending Hatta: adding a slideshow functionality.
"""

import werkzeug
import os

import hatta

_ = lambda x: x

class WikiPageWiki(hatta.WikiPageWiki):
    def footer(self, special_title, edit_url):
        for part in super(WikiPageWiki, self).footer(special_title, edit_url):
            yield part
        yield werkzeug.html.a(werkzeug.html(_('Slides')),
            href=self.get_url(self.title, self.wiki.slides),
            class_='slides')
        yield u'\n'


class Wiki(hatta.Wiki):
    @hatta.URL('/+slides/<title:title>')
    def slides(self, request, title):
        """Dump the HTML content of the pages listed."""

        items = self.index.page_links_and_labels(title)
        contents = []
        for t, label in items:
            page = self.get_page(request, t)
            try:
                html = ''.join(page.view_content())
            except hatta.error.NotFoundErr:
                continue
            slide_title = (u'<h1>%s</h1>' % werkzeug.escape(label))
            contents.append(slide_title + html)
        content = ('<div class="slide">%s</div>'
                   % '</div><div class="slide">'.join(contents))
        html = """<!DOCTYPE html>
<link type="text/css" href="../+download/slides.css" rel="stylesheet">
<link type="text/css" href="../+download/pygments.css" rel="stylesheet">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>%s</title>
%s
<script src="../+download/jquery.js"></script>
<script src="../+download/slides.js"></script>
""" % (werkzeug.escape(title), content)
        response = hatta.WikiResponse(html, mimetype='text/html')
        return response


if __name__=='__main__':
    config = hatta.read_config()
    wiki = Wiki(config)
    wiki.mime_map['text/x-wiki'] = WikiPageWiki
    hatta.main(wiki=wiki)
