from django.shortcuts import render

# Create your views here.
from rest_framework import status, generics, mixins
from rest_framework.response import Response
from rest_framework.views import APIView

from apiv1.models import UserDocument
from apiv1.serializer import UserDocumentSerializer


class UserDocumentView(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = UserDocumentSerializer

    def get_queryset(self):
        return UserDocument.objects.filter(user=self.request.user)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request):
        ctx = request.data
        ctx['user'] = self.request.user.pk
        serializer = UserDocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
