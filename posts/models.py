from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=100)
    published_at = models.DateField()
    pagelink = models.CharField(max_length=1000)
    html = models.CharField(max_length=100000)
