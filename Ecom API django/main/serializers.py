from rest_framework import serializers
from . import models

#Vendor
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id', 'user', 'address']
    
    def __init__(self, *args , **kwargs):
        super(VendorSerializer, self).__init__(*args , **kwargs)
        #self.Meta.depth = 1  

#VendorDetail
class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id', 'user', 'address']

    def __init__(self, *args , **kwargs):
        super(VendorDetailSerializer, self).__init__(*args , **kwargs)
        #self.Meta.depth = 1


#Product
class ProductListSerializer(serializers.ModelSerializer):
    product_ratings = serializers.StringRelatedField(many=True, read_only = True)
    class Meta:
        model = models.Product
        fields = ['id', 'category', 'vendor', 'title', 'detail', 'price', 'product_ratings']
        
    def __init__(self, *args , **kwargs):
        super(ProductListSerializer, self).__init__(*args , **kwargs) 
        # self.Meta.depth = 1


#Product Detail
class ProductDetailSerializer(serializers.ModelSerializer):
    product_ratings = serializers.StringRelatedField(many=True, read_only = True)
    class Meta:
        model = models.Product
        fields = ['id', 'category', 'vendor', 'title', 'detail', 'price', 'product_ratings']

    def __init__(self, *args , **kwargs):
        super(ProductDetailSerializer, self).__init__(*args , **kwargs)
        self.Meta.depth = 1

#Product Rating
class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields = ['id', 'customer', 'product', 'rating', 'reviews', 'add_time']
    def __init__(self, *args , **kwargs):
        super(ProductRatingSerializer, self).__init__(*args , **kwargs)
        self.Meta.depth = 1






# Customer
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id', 'user', 'mobile']
    def __init__(self, *args , **kwargs):
        super(CustomerSerializer, self).__init__(*args , **kwargs)
        self.Meta.depth = 1

# Customer Detail
class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id', 'user', 'mobile']
    def __init__(self, *args , **kwargs):
        super(CustomerDetailSerializer, self).__init__(*args , **kwargs)
        self.Meta.depth = 1

#Customer Address
class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerAddress
        fields = ['id', 'customer', 'address', 'default_address']
    def __init__(self, *args , **kwargs):
        super(CustomerAddressSerializer, self).__init__(*args , **kwargs)
        self.Meta.depth = 1



#Order
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ['id', 'customer',]
    def __init__(self, *args , **kwargs):
        super(OrderSerializer, self).__init__(*args , **kwargs)
        self.Meta.depth = 1

#Order Detail
class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItem
        fields = ['id', 'order', 'product']
    def __init__(self, *args , **kwargs):
        super(OrderDetailSerializer, self).__init__(*args , **kwargs)
        self.Meta.depth = 1





#Categories
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id', 'title', 'detail']
    
    def __init__(self, *args , **kwargs):
        super(CategorySerializer, self).__init__(*args , **kwargs)
        #self.Meta.depth = 1  

#Category detail
class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id', 'title', 'detail']

    def __init__(self, *args , **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args , **kwargs)
        #self.Meta.depth = 1
