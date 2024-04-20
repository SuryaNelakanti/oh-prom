from django.contrib import admin
from django.urls import include, path

from accounts.views import (
    LogoutView,
    LoginView,
    RegistrationView,
    UserCRUDView,
)
from projects.views import (
    ProjectListCreateAPIView,
    ProjectRetrieveUpdateDestroyAPIView,
)
from tasks.views import TaskListCreateAPIView, TaskRetrieveUpdateDestroyAPIView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("register/", RegistrationView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="login"),
    path(
        "users/<int:pk>/",
        UserCRUDView.as_view(),
        name="user-detail",
    ),
    path(
        "projects/",
        ProjectListCreateAPIView.as_view(),
        name="project-list-create",
    ),
    path(
        "projects/<uuid:pk>/",
        ProjectRetrieveUpdateDestroyAPIView.as_view(),
        name="project-detail",
    ),
    path(
        "projects/<uuid:pk>/tasks/",
        TaskListCreateAPIView.as_view(),
        name="task-list-create",
    ),
    path(
        "tasks/<uuid:pk>/",
        TaskRetrieveUpdateDestroyAPIView.as_view(),
        name="task-detail",
    ),
]
