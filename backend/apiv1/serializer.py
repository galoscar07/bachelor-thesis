from rest_framework import serializers

from apiv1.models import UserDocument, Questions


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = ('id', 'question', 'response1', 'response2', 'response3', 'correct_response')


class UserDocumentSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, required=False)

    class Meta:
        model = UserDocument
        fields = ('content', 'title', 'short_content', 'user', 'pk', 'questions')
