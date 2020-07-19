from django.test import TestCase
from django.db import IntegrityError
from core.models import History
from core.factories import HistoryFactory

class HistoryModelTests(TestCase):

  def setUp(self):
        self.history = HistoryFactory.create()

  def test_history_creation(self):
    """
    Test create a new History entry
    """
    self.assertTrue(isinstance(self.history, History))

  def test_url_cannot_be_null(self):
        """
        Test that History cannot be created without an url
        """
        with self.assertRaises(IntegrityError):
            HistoryFactory.create(url=None)

  def test_url_uniqueness(self):
        """
        Test that a History cannot be created with a non-unique url
        """
        HistoryFactory.create(url='https://www.youtube.com/watch?v=9ao4FEaDGhQ')

        with self.assertRaises(IntegrityError):
            HistoryFactory.create(url='https://www.youtube.com/watch?v=9ao4FEaDGhQ')