# Generated by Django 2.2.3 on 2019-07-30 07:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_auto_20190730_0700'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='html',
            field=models.CharField(max_length=100000),
        ),
    ]
