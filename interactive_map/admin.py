from django.contrib import admin
from .models import IMaps, Street

"""
    The aim of that is to add all this OMR to the admin site.

    admin.site.register(ORM name)
"""
################################
admin.site.register(IMaps)
admin.site.register(Street)