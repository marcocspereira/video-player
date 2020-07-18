from rest_framework import viewsets
from core.models import History
from .serializers import HistorySerializer


class HistoryViewSet(viewsets.ModelViewSet):
    """
    Provides actions to .list(), .retrieve(), .create(),
    .update(), .partial_update() and .destroy() for History records
    """

    serializer_class = HistorySerializer

    queryset = History.objects.all()