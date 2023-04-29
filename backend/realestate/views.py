from django.shortcuts import render
from django.http import HttpResponse
from joblib import load
import pathlib
import numpy as np

# Create your views here.

def real_estate(request):
    pass

def results(request):
    decision_tree = load(pathlib.Path('model/real-estate-v1.joblib'))
    feature_list = []
    feature_list.append(request.GET['totalsqft'])
    feature_list.append(request.GET['daystosell'])
    feature_list.append(request.GET['zipcode'])
    feature_list.append(request.GET['bedrooms'])
    feature_list.append(request.GET['bathrooms'])
    feature_list.append(request.GET['halfbathrooms'])
    feature_list.append(request.GET['year'])
    feature_list.append(request.GET['garage'])
    answer = decision_tree.predict(feature_list)
    return render(request, 'result.html', {'ans':answer})