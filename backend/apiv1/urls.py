from django.conf.urls import url

from apiv1 import views

urlpatterns = [
    url(r'^document/', views.UserDocumentView.as_view()),
]