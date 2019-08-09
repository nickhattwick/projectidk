from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('', views.homepage, name='posts'),
    path('bootstrap', TemplateView.as_view(template_name='bootstrap/example.html')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
