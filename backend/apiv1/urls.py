from django.urls import path

from apiv1 import views

urlpatterns = [
    path('document/', views.UserDocumentView.as_view()),
    path('document/<int:pk>/', views.UserDocumentDetailsView.as_view())
]