from django.urls import path
from . import views
from .views import TaskList, TaskDetail, TaskCreate

urlpatterns = [
    path('register/', views.registerPage, name="register"),
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),

    path('', TaskList.as_view(), name="tasks"),
    path('task/<int:pk>/', TaskDetail.as_view(), name="task"),
    path('create-task/', TaskCreate.as_view(), name='task-create'),
]
