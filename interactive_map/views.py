from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from .models import IMaps


# Create your views here.

@login_required
def home(request):
    imaps = IMaps.objects.all()
    return render(request, 'home.html', locals()) #afficher les map dispo avec un link vers elle


@login_required
def imap(request, map_id):
    return render(request, 'imap.html', locals()) #afficher la carte (copier l'autre projet)


@login_required
def imap_create(request):
    return render(request, 'imap_create.html', locals()) #just mettre un form pour creer une nouvelle map (commencer par ca après le menu)
