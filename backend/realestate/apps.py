from django.apps import AppConfig
from joblib import load
import pathlib

class RealestateConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'realestate'
    #pretrained_model = load(pathlib.Path('model/real-estate-v1.joblib'))
