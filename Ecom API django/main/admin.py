from django.contrib import admin
from . import models


class ProductRatingAdmin(admin.ModelAdmin):
    list_display = ['customer', 'product', 'rating', 'reviews', 'add_time']
    search_fields = ['customer']
    list_filter = ['rating']

class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'detail']

class VendorAdmin(admin.ModelAdmin):
    list_display = ['user', 'address']
    search_fields = ['user']

class ProductAdmin(admin.ModelAdmin):
    list_display = ['category', 'vendor', 'title', 'price']
    search_fields = ['category', 'vendor', 'title']
    list_filter = ['category', 'vendor']


class CustomerAddressAdmin(admin.ModelAdmin):
    list_display = ['customer', 'address', 'default_address']
    search_fields = ['customer', 'address', 'default_address']
    list_filter = ['default_address']


class CustomerAdmin(admin.ModelAdmin):
    list_display = ['user', 'mobile']
    search_fields = ['user', 'mobile']

class OrderAdmin(admin.ModelAdmin):
    list_display = ['customer', 'order_time']
    search_fields = ['customer', 'order_time']

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['order', 'product']
    search_fields = ['order', 'product']



admin.site.register(models.Vendor, VendorAdmin)
admin.site.register(models.ProductCategory, ProductCategoryAdmin)
admin.site.register(models.Product, ProductAdmin)
admin.site.register(models.Customer, CustomerAdmin)
admin.site.register(models.Order, OrderAdmin)
admin.site.register(models.OrderItem, OrderItemAdmin)
admin.site.register(models.CustomerAddress, CustomerAddressAdmin)
admin.site.register(models.ProductRating, ProductRatingAdmin)