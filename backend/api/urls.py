import regex as regex
from allauth.account.views import confirm_email
from django.conf.urls import url
from django.urls import include, path


urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
