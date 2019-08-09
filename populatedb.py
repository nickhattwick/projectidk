import json
import datetime
from django.core import serializers
from posts.models import Blog

blogposts = [
    {
        'title': 'Data Structures: Tree Traversal',
        'published_at': datetime.date(2019, 8, 8),
        'pagelink': 'traversingtrees.html'
    },
    {
        'title': 'Data Structures: Stacks and Queues',
        'published_at': datetime.date(2019, 8, 7),
        'pagelink': 'stacksandqueues.html'
    },
    {
        'title': 'Data Structures: Linked Lists',
        'published_at': datetime.date(2019, 7, 29),
        'pagelink': 'linkedlists.html'
    },
    {
        'title': 'Comparing JS Frameworks: Vue and Angular',
        'published_at': datetime.date(2019, 5, 13),
        'pagelink': 'comparing-js-frameworks.html'
    },
    {
        'title': 'To JSON and Back with JavaScript',
        'published_at': datetime.date(2017, 7, 13),
        'pagelink': 'jsonandback.html'
    },
    {
        'title': 'Tackling the Titanic Problem',
        'published_at': datetime.date(2019, 2, 26),
        'pagelink': 'kaggle01.html'
    },
    {
        'title': 'Predicting Housing Values in Iowa',
        'published_at': datetime.date(2019, 3, 19),
        'pagelink': 'kaggle02.html'
    },
    {
        'title': 'Recognizing Digits with Tensorflow',
        'published_at': datetime.date(2019, 3, 31),
        'pagelink': 'kaggle03.html'
    },
    {
        'title': 'Detecting Facial Features with Tensorflow',
        'published_at': datetime.date(2019, 4, 27),
        'pagelink': 'kaggle04.html'
    },
    {
        'title': 'Seeing the Future with Backtracking and Recursion',
        'published_at': datetime.date(2017, 7, 18),
        'pagelink': 'n-queens.html'
    },
    {
        'title': 'Creating a Web Server with Node.JS',
        'published_at': datetime.date(2017, 7, 26),
        'pagelink': 'node-web-server.html'
    },
    {
        'title': 'Sorting Algorithms',
        'published_at': datetime.date(2019, 5, 22),
        'pagelink': 'sorting.html'
    },
    {
        'title': 'The Basics of (Time) Complexity',
        'published_at': datetime.date(2017, 7, 25),
        'pagelink': 'time-complexity.html'
    }
]

Blog.objects.all().delete()
for post in blogposts:
    path = "./posts/templates/posts/" + post['pagelink']
    with open(path, "r",encoding='utf-8') as html:
        post['html'] = html.read()
    blog = Blog.objects.create(title=post['title'], published_at=post['published_at'], pagelink=post['pagelink'], html=post['html'])
    blog.save()
