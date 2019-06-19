from rest_framework import serializers

from apiv1.models import UserDocument


class UserDocumentSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDocument
        fields = ('content', 'title', 'short_content', 'user')