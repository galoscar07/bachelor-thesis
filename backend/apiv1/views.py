import copy

from django.contrib.auth.decorators import login_required
from django.http import Http404
from django.shortcuts import render, get_object_or_404

# Create your views here.
from django.utils.decorators import method_decorator
from rest_framework import status, generics, mixins
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from apiv1.models import UserDocument, Questions
from apiv1.serializer import UserDocumentSerializer
from qg.wrapper import QuestionGenerator


class UserDocumentView(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = UserDocumentSerializer

    def get_queryset(self):
        if not self.request.user:
            token = self.request.META.get("HTTP_AUTHORIZATION", "").split(' ')
            token_ = Token.objects.get(key=token[1])
            return UserDocument.objects.filter(user=token_.user.pk)
        return UserDocument.objects.filter(user=self.request.user.pk)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request):
        ctx = copy.deepcopy(request.data)
        ctx['user'] = self.request.user.pk
        serializer = UserDocumentSerializer(data=ctx)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDocumentDetailsView(generics.GenericAPIView, mixins.RetrieveModelMixin):
    serializer_class = UserDocumentSerializer

    def get_object(self):
        return get_object_or_404(UserDocument, id=self.kwargs.get('pk', -1))

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        # if there are already questions don't recompute them
        if instance.questions.exists():
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        # else generate questions
        text = instance.content
        qg = QuestionGenerator(text=text)
        question_list = qg.get_questions()
        for question in question_list:
            instance.questions.create(question=question)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_200_OK)
