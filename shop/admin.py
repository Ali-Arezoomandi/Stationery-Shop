from django.contrib import admin
from shop.models import Products, Category, Brands

# Register your models here.

class ProductsAdmin(admin.ModelAdmin):
    # date_hierarchy = 'created_date'
    empty_value_display = '-empty-'
    list_display = ('id', 'name', 'price', 'disscount', 'count', 'score')
    list_filter = ('category',)
    # ordering = ['-created_date']
    search_fields = ['name', 'category']

admin.site.register(Products, ProductsAdmin)
admin.site.register(Category)
admin.site.register(Brands)
