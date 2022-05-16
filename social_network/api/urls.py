from django.urls import path
from .views import Group1View, CreateGroupView, UserView, CreateUserView

urlpatterns = [
    path('', Group1View.as_view()),
    path('user', UserView.as_view()),
    path('create-group', CreateGroupView.as_view()),
    path('create-user', CreateUserView.as_view())
]