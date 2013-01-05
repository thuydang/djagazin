import os
import sys
prev_sys_path = list(sys.path)

path = '/var/www/vhosts/vfoss.org/pydocs/vfoss_org'
if path not in sys.path:
    sys.path.append(path)

import site
site.addsitedir('/var/www/vhosts/vfoss.org/pydocs/vfoss_env/lib/python2.6/site-packages')

new_sys_path = []
for item in list(sys.path):
	if item not in prev_sys_path:
		new_sys_path.append(item)
		sys.path.remove(item)
sys.path[:0] = new_sys_path

os.environ['DJANGO_SETTINGS_MODULE'] = 'vfoss_org.settings'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()

