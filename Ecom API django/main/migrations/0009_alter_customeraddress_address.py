# Generated by Django 4.2.2 on 2023-06-19 01:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_rename_order_customeraddress_customer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeraddress',
            name='address',
            field=models.CharField(),
        ),
    ]
