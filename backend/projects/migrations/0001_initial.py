# Generated by Django 5.0.4 on 2024-04-20 07:43

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Project",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4, primary_key=True, serialize=False
                    ),
                ),
                ("title", models.CharField(max_length=150)),
                ("description", models.TextField()),
                ("start_date", models.DateField()),
                ("estimated_end_date", models.DateField()),
                ("updated_at", models.DateTimeField(auto_now=True, null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True, null=True)),
                (
                    "created_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="project_created_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "edited_by",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="project_edited_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
