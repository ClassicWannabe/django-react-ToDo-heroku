from django.db import models

# Create your models here.

class TaskModel(models.Model):
    title = models.CharField(max_length=40)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-id']