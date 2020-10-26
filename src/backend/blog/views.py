from django.http import response
from django.shortcuts import render
from rest_framework import views, permissions
from rest_framework import request
from rest_framework.response import Response
from django.contrib.auth import login, logout

# Create your views here.
from .serializers import LoginSerializer, UserSerializer


class LoginView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        return Response({'message': 'Login view..'})

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data.get("user")
        login(request, user)
        return Response(UserSerializer(user, context={"request": request}).data)


class LogoutView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        print(request.user)
        if request.user:
            logout(request)
            return Response({'message': 'The user has been logout!'})
        return Response({'message': 'The user not logged!'})


class PostView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        print(request.user)

        # posts = {
        #     {'title': 'This is a blog post', 'id': 1},
        #     {'title': 'What I did last summer', 'id': 2},
        #     {'title': 'What I thing', 'id': 3},
        #     {'title': 'What is this', 'id': 4},
        #     {'title': 'This is another post', 'id': 5},
        #     {'title': 'I start programming', 'id': 6},
        # }
        return Response({'title': 'This is a blog post', 'id': 1})
