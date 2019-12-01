from django.urls import path
from . import views

"""
    Url pattern.
    Mainly use "path": path('path', view.to.connect)
    
    url can also be used (see on documentation)
    
    this class is included in the main urls file (OPIA/urls.py)
"""

urlpatterns = [
    path('home', views.home),
    path('imap/<map_id>', views.imap),
    path('create', views.imap_create),
]