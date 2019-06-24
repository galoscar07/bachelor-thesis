from django.contrib.auth import login, get_backends
from django.utils.deprecation import MiddlewareMixin
from rest_framework.authtoken.models import Token


class GetUserMiddleware(MiddlewareMixin):
    def process_request(self, request):
        token = request.META.get("HTTP_AUTHORIZATION", "").split(' ')
        if len(token) == 2:
            token_ = Token.objects.filter(key=token[1])
            if len(token_) == 0:
                return
            user = token_[0].user
            backend = get_backends()[0]
            user.backend = "%s.%s" % (backend.__module__, backend.__class__.__name__)
            login(request, user)


class CheckPermissionMiddleware(MiddlewareMixin):
    def process_request(self, request):
        pass
