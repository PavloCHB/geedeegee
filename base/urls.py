from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('manager/', views.manager),
    path('manager/<int:id>', views.manager)
]
