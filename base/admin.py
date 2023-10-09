from django.contrib import admin

# Register your models here.

from .models import Item,Table


admin.site.register(Item)

admin.site.register(Table)