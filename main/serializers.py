from rest_framework import serializers
from rest_framework.fields import empty
from . import models

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id', 'user', 'address']

    #show detail info user
    def __init__(self, *args , **kwargs):
        super(VendorSerializer, self).__init__(*args , **kwargs)
        self.Meta.depth = 1




class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id', 'user', 'address']

    #show detail info user
    def __init__(self, *args , **kwargs):
        super(VendorDetailSerializer, self).__init__(*args , **kwargs)
        self.Meta.depth = 1