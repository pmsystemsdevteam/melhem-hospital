from rest_framework import serializers
from .models import DepartmentCard, Faq, FourBox, HowWeWork, HowWeWorkWay, MeetOurDoctors, OurBlog, OurDepartment, Testimonials, WhyChooseUs, Card, WhyChooseUsBox, FaqHead, Appointment, Header
from bson import ObjectId

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'appointment_text']

class ObjectIdField(serializers.Field):
    """Custom field to handle MongoDB ObjectId serialization."""

    def to_representation(self, value):
        return str(value)

    def to_internal_value(self, data):
        try:
            return ObjectId(data)
        except Exception as e:
            raise serializers.ValidationError("Invalid ObjectId")
        

class DepartmentCardSerializer(serializers.ModelSerializer):
    id = ObjectIdField(read_only=True)

    class Meta:
        model = DepartmentCard
        fields = ['id', 'headText', 'description', 'file']

class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = ['id', 'question', 'answer', 'created_at']

class FaqHeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = FaqHead
        fields = ['id', 'header_text']

class FourBoxSerializer(serializers.ModelSerializer):
    class Meta:
        model = FourBox
        fields = ['id', 'card_number', 'head_text', 'description_text', 'logo']

class HeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Header
        fields = ['id', 'header_text', 'header_description', 'header_photo']

class HowWeWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = HowWeWork
        fields = '__all__'

class HowWeWorkWaySerializer(serializers.ModelSerializer):
    class Meta:
        model = HowWeWorkWay
        fields = '__all__'

class MeetOurDoctorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeetOurDoctors
        fields = '__all__'

class OurBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurBlog
        fields = '__all__'

class OurDepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurDepartment
        fields = '__all__'

class TestimonialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonials
        fields = '__all__'

class WhyChooseUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyChooseUs
        fields = '__all__'

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['logo', 'head_text', 'description_text']

class WhyChooseUsBoxSerializer(serializers.ModelSerializer):
    cards = CardSerializer(many=True)

    class Meta:
        model = WhyChooseUsBox
        fields = ['back_image', 'cards']

    def create(self, validated_data):
        cards_data = validated_data.pop('cards')
        box = WhyChooseUsBox.objects.create(**validated_data)
        for card_data in cards_data:
            Card.objects.create(why_choose_us_box=box, **card_data)
        return box