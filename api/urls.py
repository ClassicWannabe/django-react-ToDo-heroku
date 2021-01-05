from django.urls import path
from .views import FirstAPI, ListAPI, DetailAPI, CreateAPI, UpdateAPI, DeleteAPI

urlpatterns = [
    path('',FirstAPI.as_view(),name='home_url'),
    path('task-list',ListAPI.as_view(),name='list_url'),
    path('task-detail/<str:pk>',DetailAPI.as_view(),name='detail_url'),
    path('task-create',CreateAPI.as_view(),name='create_url'),
    path('task-update/<str:pk>',UpdateAPI.as_view(),name='update_url'),
    path('task-delete/<str:pk>',DeleteAPI.as_view(),name='delete_url'),
]