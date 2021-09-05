from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE, PROTECT
from django.db.models.fields.related import ForeignKey
from django.db.models.manager import Manager
from django.db.models import Model
from django.db.models.fields import CharField, DateTimeField, SlugField, TextField
from django.utils import timezone


# Create your models here.
class Category(Model):
    name = CharField(max_length=100)

    def __str__(self):
        return self.name


class Post(Model):
  class PostObjects(Manager):
      def get_queryset(self):
          return super().get_queryset() .filter(status='published')

  options = (
      ('draft', 'Draft'),
      ('published', 'Published'),
  )
  category = ForeignKey(
      Category, on_delete=CASCADE, blank=True)
  title = CharField(max_length=250)
  excerpt = TextField(null=True)
  content = TextField()
  slug = SlugField(max_length=250, unique_for_date='published')
  published = DateTimeField(default=timezone.now)
  author = ForeignKey(
      User, on_delete=CASCADE, related_name='blog_posts')
  status = CharField(
      max_length=10, choices=options, default='published')
  objects = Manager()  # default manager
  postobjects = PostObjects()  # custom manager

  class Meta:
      ordering = ('-published',)

  def __str__(self):
      return self.title