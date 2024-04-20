from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "description",
            "start_date",
            "estimated_end_date",
            "created_by",
            "edited_by",
        ]