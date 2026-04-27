from django.urls import path
from products.views import *


app_name = 'products'

urlpatterns = [
    path('', products_view, name='home')
]