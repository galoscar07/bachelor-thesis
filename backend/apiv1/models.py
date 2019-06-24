from django.contrib.auth.models import User
from django.db import models


class UserDocument(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(default="")
    title = models.CharField(max_length=500)
    short_content = models.CharField(max_length=1000)


class Questions(models.Model):
    question = models.TextField()
    document = models.ForeignKey(UserDocument,
                                 on_delete=models.CASCADE,
                                 related_name='questions',
                                 null=True, blank=True)
    response1 = models.TextField()
    response2 = models.TextField()
    response3 = models.TextField()
    correct_response = models.TextField()
