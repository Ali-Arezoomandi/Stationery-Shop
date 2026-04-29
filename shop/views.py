from django.shortcuts import render
from shop.models import Products, Category
from random import randint
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.contrib.auth.decorators import login_required

# Create your views here.

def home_view(request):
    products = Products.objects.filter(score__gt=3)
    categories = Category.objects.all()
    
    best_products_count = products.count()
    
    if best_products_count > 4:
        random_number = randint(1, products.count()-4)
    else:
        products = Products.objects.exclude(count=0)
        random_number = randint(1, products.count()-4)
        
    random_number = randint(1, products.count()-4)
    context = {'products': products[random_number:random_number+4], 'category': categories}
    return render(request, 'shop/index.html', context)

@login_required
def shop_view(request, cat_name=None, brands_name=None):

    categories = Category.objects.all()

    products = Products.objects.all()
    if cat_name:
        products = products.filter(category__name=cat_name)
    if brands_name:
        products = products.filter(p_brand__name=brands_name)
        
    if request.method == "GET":
        if request.GET.get('search'):
            search = request.GET.get('search')
            products = products.filter(name__contains=search)
        
    products = Paginator(products, 6)
    try:
        page_numebr = request.GET.get('page')
        products = products.get_page(page_numebr)
    except PageNotAnInteger: 
        products = products.get_page(1)
    except EmptyPage:
        products = products.get_page(products.count // 6)
    
    context = {'products': products, 'category': categories}
    return render(request, 'shop/shop.html', context)


def about_view(request):
    
    categories = Category.objects.all()
    
    return render(request, 'shop/about.html', {'category': categories})