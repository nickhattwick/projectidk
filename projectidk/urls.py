from django.contrib import admin
from django.urls import include, path
from django.conf.urls import static

urlpatterns = [
    path('blog/', include('posts.urls')),
    path('admin/', admin.site.urls),
]
