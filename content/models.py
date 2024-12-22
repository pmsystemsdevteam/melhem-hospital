from django.db import models
from mongoengine import Document, StringField
from cloudinary.models import CloudinaryField

class Appointment(models.Model):
    appointment_text = models.JSONField()  # JSONField to store multilingual text

    def __str__(self):
        return f"Appointment - {self.id}"

class DepartmentCard(models.Model):
    headText = models.JSONField()  # Array of objects for head text
    description = models.JSONField()  # Array of objects for description
    url = models.URLField(max_length=500, blank=True, null=True)
    file = CloudinaryField('image', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Department Card {self.id}"

class Faq(models.Model):
    question = models.JSONField()  # Stores multilingual questions
    answer = models.JSONField()    # Stores multilingual answers
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"FAQ {self.id}"

class FaqHead(models.Model):
    header_text = models.JSONField()

    def __str__(self):
        return f"FAQ Head - {self.id}"

class FourBox(models.Model):
    card_number = models.IntegerField()
    head_text = models.JSONField()
    description_text = models.JSONField()
    logo = CloudinaryField('logo', blank=True, null=True)

    def __str__(self):
        return f"Card {self.card_number}"

class Header(models.Model):
    header_text = models.JSONField()
    header_description = models.JSONField()
    header_photo = CloudinaryField('header', blank=True, null=True)

    def __str__(self):
        return f"Header - {self.id}"

class HowWeWork(models.Model):
    header_text = models.JSONField()

    def __str__(self):
        return f"How We Work: {self.header_text.get('eng', '')}"

class HowWeWorkWay(models.Model):
    head_text_one = models.JSONField()
    description_text_one = models.JSONField()
    head_text_two = models.JSONField()
    description_text_two = models.JSONField()
    head_text_three = models.JSONField()
    description_text_three = models.JSONField()

    def __str__(self):
        return f"How We Work Way"

class MeetOurDoctors(models.Model):
    head_text = models.JSONField()
    description_text = models.JSONField()

    def __str__(self):
        return "Meet Our Doctors"

class OurBlog(models.Model):
    header_text = models.JSONField()

    def __str__(self):
        return "Our Blog"

class OurDepartment(models.Model):
    head_text = models.JSONField()
    description_text = models.JSONField()

    def __str__(self):
        return "Our Department"

class Testimonials(models.Model):
    profile_image = CloudinaryField('testimonials')
    back_image = CloudinaryField('testimonials')
    name = models.JSONField()
    description = models.JSONField()
    country = models.JSONField()

    def __str__(self):
        return self.name.get("eng", "Testimonials")

class WhyChooseUs(models.Model):
    head_text = models.JSONField(default=dict)

    def __str__(self):
        return f"Why Choose Us: {self.head_text.get('eng', 'No Text')}"

class WhyChooseUsBox(models.Model):
    back_image = CloudinaryField("why_back_image")
    created_at = models.DateTimeField(auto_now_add=True)

class Card(models.Model):
    why_choose_us_box = models.ForeignKey(WhyChooseUsBox, related_name="cards", on_delete=models.CASCADE)
    logo = CloudinaryField("card_logo")
    head_text = models.JSONField()
    description_text = models.JSONField()