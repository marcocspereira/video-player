from django.db import models

# Create your models here.
class History(models.Model):
  """
  Class that handles the history data
  """
  url = models.CharField(max_length=256, unique=True, null=False)

  def str(self):
    """
    Return a string representation of this History
    """
    return self.url