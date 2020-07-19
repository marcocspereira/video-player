from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from core.models import History
from core.factories import HistoryFactory
from history.serializers import HistorySerializer


HISTORY_LIST_URL = reverse('history:history-list')


def create_history(**params):
    return HistoryFactory.create(**params)


class HistoryAPIViewTest(APITestCase):
    """
    Test History API requests
    """

    def setUp(self):
        self.post_data_ok = {
            'url': 'https://www.youtube.com/watch?v=9ao4FEaDGhQ'
        }

        self.post_data_nil = {
            'url': ''
        }

        self.post_data_not_unique = self.post_data_ok

        create_history(url='https://www.youtube.com/watch?v=cMjwSnzrbCY')

    def test_create_history_sucess(self):
        """
        Test create a tyre without any problem
        """
        res = self.client.post(HISTORY_LIST_URL, self.post_data_ok)
        # assertion
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)

    def test_create_history_nil_unsucess(self):
        """
        Test that tries to create a null history
        """
        res = self.client.post(HISTORY_LIST_URL, self.post_data_nil)

        # assertion
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_retrieve_all_history_records_success(self):
        """
        Test retrieving all history records
        """

        # setup
        res = self.client.get(HISTORY_LIST_URL)
        history_records = History.objects.all()
        serializer = HistorySerializer(history_records, many=True)

        # assertion
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data), 1)
        self.assertEqual(res.data, serializer.data)
