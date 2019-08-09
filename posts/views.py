import json
from django.core.paginator import Paginator
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.forms import modelformset_factory
from posts.models import Blog


def homepage(request):
    #Get five most recent blog Posts
    recent = Blog.objects.all().order_by("-published_at")
    paginator = Paginator(recent, 3)
    page = request.GET.get('page')
    selection = paginator.get_page(page)
    return render(request, 'posts/homepage.html', {'selection': selection})
    #Pass to Template to render
