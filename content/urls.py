from django.urls import path
from . import views

urlpatterns = [
    path('appointment/', views.appointment_view, name='appointment'),
    path('department-cards/', views.department_cards, name='department_cards'),
    path('faqs/', views.faq_list, name='faq_list'),
    path('faq-head/', views.faq_head_view, name='faq-head'),
    path('four-box/', views.four_box_view, name='four_box_view'),
    path('header/', views.header_view, name='header'),
    path('how-we-work/', views.how_we_work_view, name='how_we_work'),
    path('how-we-work-way/', views.how_we_work_way_view, name='how_we_work_way'),
    path('meet-our-doctors/', views.meet_our_doctors_view, name='meet_our_doctors'),
    path('our-blog/', views.our_blog_view, name='our_blog_view'),
    path('our-department/', views.our_department_view, name='our_department_view'),
    path('testimonials/', views.testimonials_view, name='testimonials_view'),
    path('why-choose-us/', views.why_choose_us_view, name='why_choose_us_view'),
    path('why_choose_us_box/', views.why_choose_us_box_view, name='why_choose_us_box_view'),
]
