# Generated by Django 3.1.12 on 2024-12-17 23:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0006_howweworkway'),
    ]

    operations = [
        migrations.CreateModel(
            name='MeetOurDoctors',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('head_text', models.JSONField()),
                ('description_text', models.JSONField()),
            ],
        ),
    ]