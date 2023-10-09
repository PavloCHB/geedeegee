from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.

from .models import Item
from django.http import HttpResponseRedirect

def home(request):
    return render(request, 'home.html')

def manager(request, id = None):
    items = Item.objects.all()
    if request.method == 'POST':
        Item.objects.create(
            name = request.POST.get('item'),
            quantity = request.POST.get('quantity'),
            price = request.POST.get('price'),
            text = request.POST.get('details'),
            date = request.POST.get('date')
        )
        return HttpResponseRedirect("/manager")

    context = {"items": items}
    
    if id is not None: 
        context = {}
        item = get_object_or_404(Item, id=id)
        context['items'] = item
    return render(request, 'manager.html', context)

