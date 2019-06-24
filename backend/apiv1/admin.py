from django.contrib import admin

# Register your models here.
from apiv1.models import UserDocument, Questions

admin.site.register(UserDocument)
admin.site.register(Questions)