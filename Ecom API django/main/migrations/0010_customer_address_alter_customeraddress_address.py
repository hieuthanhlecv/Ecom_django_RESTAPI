# Generated by Django 4.2.2 on 2023-06-19 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_alter_customeraddress_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='address',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='customeraddress',
            name='address',
            field=models.TextField(),
        ),
    ]
