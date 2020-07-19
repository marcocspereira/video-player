from django.core.exceptions import ValidationError
from django.db import models


def validate_youtube_url(value):
    """
    Check if the url has one of the available substrings about YouTube
    """
    valid = False
    you_tube = ['youtube.com/watch?', 'youtu.be']
    for possibility in you_tube:
        if value.find(possibility) > -1:
            valid = True
            break

    if valid is False:
        raise ValidationError('Invalid URL. Must have youtube.com or youtu.be')


# Create your models here.
class History(models.Model):
    """
    Class that handles the history data
    """
    url = models.URLField(max_length=256, unique=True, null=False, blank=False,
                          validators=[validate_youtube_url])

    def str(self):
        """
        Return a string representation of this History
        """
        return self.url
