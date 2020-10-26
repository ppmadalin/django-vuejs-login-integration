from django.urls import path
from . import views

urlpatterns = [
    path('login/', view=views.LoginView.as_view(), name='login'),
    path('logout/', view=views.LogoutView.as_view(), name='logout'),
    path('posts/', view=views.PostView.as_view(), name='posts'),
]
