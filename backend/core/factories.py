import factory
from core.models import (History)

class HistoryFactory(factory.django.DjangoModelFactory):
  class Meta:
    model = History

  url = factory.Faker('url')