from django.db import models

# Create your models here.

# class Sheet(models.Model):
#     name = models.CharField(max_length=20, null= True)
#     creator = models.TextField(max_length=20, null= True, blank= True)
#     created = models.DateTimeField(auto_now_add= True)
#     def __str__(self):
#         return self.name + " " +str(self.id)

class Item(models.Model):
    name = models.CharField(max_length=20, null= True)
    quantity = models.PositiveBigIntegerField(null= True)
    price = models.PositiveBigIntegerField(null= True)
    total = models.PositiveBigIntegerField()
    text = models.TextField(null= True, blank= True)
    date = models.DateField(null= True)
    updated = models.DateTimeField(auto_now= True)
    created = models.DateTimeField(auto_now_add= True)
    def save(self, *args, **kwargs):
        self.total = int(self.quantity) * int(self.price)
        super(Item, self).save(*args, **kwargs)
    def __str__(self):
        return self.name + " " +str(self.id)

class Table(models.Model):
    name = models.CharField(max_length=20)
    updated = models.DateTimeField(auto_now= True)
    created = models.DateTimeField(auto_now_add= True)
    def __str__(self):
        return self.name + " " +str(self.id)

    