from django.urls import path
from shop.views import *

app_name = 'shop'

urlpatterns = [
    path('', home_view, name='home'),
    path('shop/', shop_view, name='shop'),
    path('shop/category/<str:cat_name>', shop_view, name='category'),
    path('shop/brands/<str:brands_name>', shop_view, name='brands'),
    path('search', shop_view, name='search'),
    path('about', about_view, name='about'),
]