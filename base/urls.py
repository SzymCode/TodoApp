from django.urls import path
from . import views
from .views import TaskList

urlpatterns = [
    path('register/', views.registerPage, name="register"),
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('', TaskList.as_view(), name="tasks"),
]
