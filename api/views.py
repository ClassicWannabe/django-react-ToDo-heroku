from django.shortcuts import render
from .models import TaskModel

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TaskSerializer

# Create your views here.

class FirstAPI(APIView):
    api_urls = {
        "List":'/task-list/',
        'Detail':'/task-detail/<str:pk>/',
        'Create':'/task-create/',
        'Update':'/task-update/<str:pk>/',
        'Delete':'/task-delete/<str:pk>/',
    }
    def get(self,request):
        return Response(self.api_urls)

class ListAPI(generics.ListAPIView):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer

class DetailAPI(generics.RetrieveAPIView):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer

class CreateAPI(generics.CreateAPIView):
    serializer_class = TaskSerializer

class UpdateAPI(generics.UpdateAPIView):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer

class DeleteAPI(generics.DestroyAPIView):
    queryset = TaskModel.objects.all()

    
    