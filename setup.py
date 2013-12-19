from setuptools import setup

setup(name='YourAppName', version='1.0',
      description='OpenShift Python-2.7 Community Cartridge based application',
      author='Your Name', author_email='ramr@example.org',
      url='http://www.python.org/sigs/distutils-sig/',

      #  Uncomment one or more lines below in the install_requires section
      #  for the specific client drivers/modules your application needs.
      install_requires=['greenlet', 'gevent',
                        #  'MySQL-python',
                        'pymongo',
                        #  'psycopg2',
												'mongoengine',
												## django cms reqiremnts
												BeautifulSoup==3.2.1
												Django==1.5.5
												PIL==1.1.7
												Pillow==2.2.1
												South==0.8.4
												cmsplugin-filer==0.9.5 #cmsplugin-zinnia==0.3
												django-appconf==0.5 #django-blog-zinnia==0.11.2
												django-classy-tags==0.4
												django-cms==2.4.3
												django-comments-spamfighter==0.4
												django-debug-toolbar==0.9.4
												django-filer==0.9.5
												django-guardian==1.0.4
												django-missing==0.1.4
												django-polymorphic==0.5.3
												django-reversion==1.6.0
												django-sekizai==0.7
												django-staticfiles==1.2.1
												django-tagging==0.3.1
												django-taggit==0.10
												django-xmlrpc==0.1.4
												djangocms-utils==0.9.5
												easy-thumbnails==1.4
												html5lib==1.0b3
												mongoengine==0.8.2
												pymongo==2.5.2
												pyparsing==1.5.6
												pytz==2012g
												simple-translation==0.8.6
												six==1.4.1
												django-mptt==0.5.2
												wsgiref==0.1.2
												],
			)
