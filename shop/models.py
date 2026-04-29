from django.db import models

# Create your models here.

class Brands(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name


class Products(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='shop/', default='shop/default.webp')
    category = models.ManyToManyField(Category)
    price = models.IntegerField(default=None)
    disscount = models.IntegerField(default=None)
    score = models.IntegerField(default=0)
    count = models.IntegerField(default=None)
    p_brand = models.ManyToManyField(Brands)
    
    def __str__(self):
        return self.name