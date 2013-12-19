from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool
from django.utils.translation import ugettext_lazy as _

class VFOSSProjectApphook(CMSApp):
    name = _("VFOSS Project")
    urls = ["cmsplugin_vfoss_project.urls"]

apphook_pool.register(VFOSSProjectApphook)
