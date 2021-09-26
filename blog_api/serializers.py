from rest_framework import fields, serializers
from .models import Category, Post

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Category

class PostSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField("get_username")
    author = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    categories = serializers.ReadOnlyField(source='category.name')
    
    def get_username(self, obj):
        return obj.author.username
    
    class Meta:
        fields = ('id', 'title', 'author', 'username', 'excerpt', 'content', 'slug', 'status','published','categories')
        model = Post