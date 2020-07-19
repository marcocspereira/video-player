from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import HistoryViewSet

app_name = 'history'

router = DefaultRouter()

router.register('', HistoryViewSet)

urlpatterns = [
    url('', include(router.urls))
]
