from django.db import models
from cms.models import CMSPlugin
from django.utils.translation import ugettext_lazy as _

# Create your models here.

class Project(models.Model):
	title = models.CharField(max_length=100)
	description = models.TextField()
	pub_date = models.DateTimeField()

	class Meta:
		verbose_name = _('Project')
		verbose_name_plural = _('Projects')
		#ordering = ('-pub_date', )

	def __unicode__(self):
		return self.title

class ProjectPlugin(CMSPlugin):
	project = models.ForeignKey(Project)
