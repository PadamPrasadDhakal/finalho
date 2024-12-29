from django.urls import path
from .views import submit_answers

urlpatterns = [
    path('submit-answers/', submit_answers, name='submit-answers'),
]