from .serializers import PostSerializer
from django.contrib.auth.models import User
from .models import Post
from django.shortcuts import get_object_or_404, render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import SAFE_METHODS, IsAuthenticatedOrReadOnly, BasePermission


class PostUserWritePermission(BasePermission):
    message = 'Editing posts is restricted to the author only.'
    
    

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        return obj.author == request.user

class PostList(ModelViewSet):
  permission_classes = [PostUserWritePermission]
  serializer_class = PostSerializer
  queryset= Post.objects.all()
  
  def get_object(self, queyset=None, **kwargs):
      item = self.kwargs.get('pk')
      return get_object_or_404(Post,slug=item)
  
#   def create(self, request, *args, **kwargs):
#     print(request.data)
#     return super().create(request, *args, **kwargs)