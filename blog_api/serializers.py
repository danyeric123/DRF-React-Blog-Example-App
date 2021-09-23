from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField("get_username")
    author = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    category = serializers.ReadOnlyField(source='category.name')
    
    def get_username(self, obj):
        return obj.author.username
    
    class Meta:
        fields = ('id', 'title', 'author', 'username', 'excerpt', 'content', 'slug', 'status','published','category')
        model = Post