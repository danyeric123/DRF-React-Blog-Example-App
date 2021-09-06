from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    category = serializers.ReadOnlyField(source='category.name')
    
    class Meta:
        fields = ('id', 'title', 'author', 'excerpt', 'content', 'slug', 'status','published','category')
        model = Post