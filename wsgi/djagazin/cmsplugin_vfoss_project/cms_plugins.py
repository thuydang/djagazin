from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from models import ProjectPlugin
from django.utils.translation import ugettext as _

class CMSProjectPlugin(CMSPluginBase):
	model = ProjectPlugin
	name = _("Project")
	render_template = "cmsplugin_vfoss_project/cmsplugin_vfoss_project_base.html"

	def render(self, context, instance, placeholder):
		context.update({
			'project':instance.project,
			'object':instance,
			'placeholder':placeholder
		})
		return context

plugin_pool.register_plugin(CMSProjectPlugin)
