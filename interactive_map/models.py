from django.db import models

# Create your models here.

class Street(models.Model):
    street_name = models.CharField(max_length=200, default="default")

class IMaps(models.Model):
    imap_id = models.CharField(max_length=200, default="default")
    nbr_lamp = models.IntegerField(default=0)
    year_eco = models.IntegerField(default=0)
    cost = models.IntegerField(default=0)
    gain_eco = models.IntegerField(default=0)
#    streets = models.ManyToManyField(Street)