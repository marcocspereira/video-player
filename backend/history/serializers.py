from rest_framework import serializers
from core.models import History

class HistorySerializer(serializers.ModelSerializer):
    """
    Serializer for History objects
    """

    class Meta:
        model = History
        fields = ('id', 'url')
        read_only_fields = ('id', )
