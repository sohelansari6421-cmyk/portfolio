from rest_framework.generics import ListAPIView, CreateAPIView
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer
from django.http import HttpResponse


# Create your views here.
class Myproject(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ContactCreate(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


def home(request):
    return HttpResponse("hello. world")
