from rest_framework import serializers
from .models import JobWorker, JobCategory

class JobCategorySerializer(serializers.ModelSerializer):
    class Meta:
        models = JobCategory
        fields = '__all__'

class JobWorkerSerializer(serializers.ModelSerializer):
    job_category = JobCategorySerializer(many=True)
    
    class Meta:
        models = JobWorker
        fields = '__all__'