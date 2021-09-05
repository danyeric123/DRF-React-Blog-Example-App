from django.urls import path
from rest_framework import routers
from .views import PostList
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('',PostList,basename='post')

urlpatterns = router.urls