from django.urls import path
from .views import Myproject, ContactCreate

urlpatterns = [
    path("projects/", Myproject.as_view()),
    path("contact/", ContactCreate.as_view()),
]
