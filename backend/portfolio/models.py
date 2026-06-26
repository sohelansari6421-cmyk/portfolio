from django.db import models


# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=225)
    description = models.TextField()
    github_link = models.URLField()
    demo_link = models.URLField(blank=True)

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=225)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
