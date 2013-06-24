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
												# django cms reqiremnts
												'Django==1.4.2',
												'BeautifulSoup==3.2.1',
												'PIL==1.1.7',
												'South==0.7.6',
												'cmsplugin-filer==0.8.0',
												# not used cmsplugin-zinnia==0.3
												'django-appconf==0.5',
												#django-blog-zinnia==0.11.2
												'django-classy-tags==0.3.4.1',
												'django-cms==2.3.3',
												'django-comments-spamfighter==0.4',
												'django-filer==0.9.1',
												'django-guardian==1.0.4',
												'django-missing==0.1.4',
												'django-polymorphic==0.2',
												'django-reversion==1.6.0',
												'django-sekizai==0.6.1',
												'django-staticfiles==1.2.1',
												'django-tagging==0.3.1',
												'django-xmlrpc==0.1.4',
												'djangocms-utils==0.9.5',
												'easy-thumbnails==1.1',
												'html5lib==0.95',
												'pyparsing==1.5.6',
												'pytz==2012g',
												'simple-translation==0.8.6',
												'django-debug-toolbar==0.9.4',
												'wsgiref==0.1.2',
												# cmsplugin-blog==1.1.2 external # django-mptt==0.5.4 external
												],
			)
