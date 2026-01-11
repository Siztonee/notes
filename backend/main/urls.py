from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'main'

router = DefaultRouter()
router.register(r'notes', views.NoteViewSet, basename='notes')

urlpatterns = [
    path('', include(router.urls)),
]

