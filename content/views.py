from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
import base64
import cloudinary
from rest_framework import status
from cloudinary.uploader import upload
from django.core.files.base import ContentFile
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from .models import DepartmentCard, Faq, FourBox, HowWeWork, HowWeWorkWay, MeetOurDoctors, OurBlog, OurDepartment, Testimonials, WhyChooseUs, WhyChooseUsBox, FaqHead, Appointment, Header
from .serializers import DepartmentCardSerializer, FaqSerializer, FourBoxSerializer, HowWeWorkSerializer, HowWeWorkWaySerializer, MeetOurDoctorsSerializer, OurBlogSerializer, OurDepartmentSerializer, TestimonialsSerializer, WhyChooseUsSerializer, WhyChooseUsBoxSerializer, FaqHeadSerializer, AppointmentSerializer, HeaderSerializer

@api_view(['GET', 'POST'])
@parser_classes([JSONParser])
def appointment_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)

        # Process incoming data
        data = {
            "appointment_text": {
                "eng": request.data.get("appTextEng", ""),
                "aze": request.data.get("appTextAze", ""),
                "rus": request.data.get("appTextRus", ""),
                "arab": request.data.get("appTextArab", "")
            }
        }

        # Serialize and validate the data
        serializer = AppointmentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print("Validation Errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Fetch and return all appointment entries
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
def department_cards(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)
        print("Incoming Files:", request.FILES)

        # Manually parse the incoming data to match serializer expectations
        data = []
        index = 0
        while f"card[{index}].HeadTextEng" in request.data:
            card_data = {
                "headText": {
                    "eng": request.data.get(f"card[{index}].HeadTextEng"),
                    "aze": request.data.get(f"card[{index}].HeadTextAze"),
                    "rus": request.data.get(f"card[{index}].HeadTextRus"),
                    "arab": request.data.get(f"card[{index}].HeadTextArab"),
                },
                "description": {
                    "eng": request.data.get(f"card[{index}].DescriptionTextEng"),
                    "aze": request.data.get(f"card[{index}].DescriptionTextAze"),
                    "rus": request.data.get(f"card[{index}].DescriptionTextRus"),
                    "arab": request.data.get(f"card[{index}].DescriptionTextArab"),
                },
                "url": request.data.get(f"card[{index}].url")
            }

            # Handle file upload to Cloudinary
            if f"card[{index}].file" in request.FILES:
                result = cloudinary.uploader.upload(
                    request.FILES[f"card[{index}].file"],
                    folder="dep_cardImgs/",
                    invalidate=True
                )
                print("Upload Result:", result)  # Debugging
                card_data["file"] = result["url"]


            else:
                # If no file is provided, set URL to None or retain existing value
                card_data["url"] = None

            data.append(card_data)
            index += 1

        # Serialize the cleaned data
        serializer = DepartmentCardSerializer(data=data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print("Validation Errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Fetch all department cards
        cards = DepartmentCard.objects.all()
        serializer = DepartmentCardSerializer(cards, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
def faq_list(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)


        if isinstance(request.data, list):
            data = request.data
        else:
            data = []
            index = 0
            while f"faq[{index}].questionEng" in request.data:
                faq_data = {
                    "question": {
                        "eng": request.data.get(f"faq[{index}].questionEng"),
                        "aze": request.data.get(f"faq[{index}].questionAze"),
                        "rus": request.data.get(f"faq[{index}].questionRus"),
                        "arab": request.data.get(f"faq[{index}].questionArab"),
                    },
                    "answer": {
                        "eng": request.data.get(f"faq[{index}].answerEng"),
                        "aze": request.data.get(f"faq[{index}].answerAze"),
                        "rus": request.data.get(f"faq[{index}].answerRus"),
                        "arab": request.data.get(f"faq[{index}].answerArab"),
                    }
                }
                data.append(faq_data)
                index += 1

        # Serialize and save the data
        serializer = FaqSerializer(data=data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print("Validation Errors:", serializer.errors)  # Debugging purposes
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Fetch all FAQs
        faqs = Faq.objects.all()
        serializer = FaqSerializer(faqs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
def faq_head_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)

        # Process incoming data
        data = {
            "header_text": {
                "eng": request.data.get("headerTextEng", ""),
                "aze": request.data.get("headerTextAze", ""),
                "rus": request.data.get("headerTextRus", ""),
                "arab": request.data.get("headerTextArab", "")
            }
        }

        # Serialize and validate the data
        serializer = FaqHeadSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print("Validation Errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Fetch and return all FAQ Head entries
        faq_heads = FaqHead.objects.all()
        serializer = FaqHeadSerializer(faq_heads, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
def four_box_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)
        print("Incoming Files:", request.FILES)

        card_data_list = []

        # Handle both JSON and multipart data
        if isinstance(request.data, list):  # JSON Input
            card_data_list = request.data
        else:  # Multipart form-data
            for i in range(0, 20):  # Dynamically process 20 cards
                if f"card{i}logo" in request.FILES:
                    # Check if the file exists in request.FILES
                    # Build the card data
                    card_data = {
                        "card_number": i,
                        "head_text": {
                            "eng": request.data.get(f"card{i}HeadTextEng", ""),
                            "aze": request.data.get(f"card{i}HeadTextAze", ""),
                            "rus": request.data.get(f"card{i}HeadTextRus", ""),
                            "arab": request.data.get(f"card{i}HeadTextArab", ""),
                        },
                        "description_text": {
                            "eng": request.data.get(f"card{i}DescriptionTextEng", ""),
                            "aze": request.data.get(f"card{i}DescriptionTextAze", ""),
                            "rus": request.data.get(f"card{i}DescriptionTextRus", ""),
                            "arab": request.data.get(f"card{i}DescriptionTextArab", ""),
                        },
                    }

                    # Upload the file to Cloudinary
                    result = cloudinary.uploader.upload(
                        request.FILES[f"card{i}logo"],
                        folder="logos/",
                        invalidate=True
                    )
                    card_data["logo"] = result["url"]
                    print("Upload Result:", result)

                    # Append the card data to the list
                    card_data_list.append(card_data)


        # Serialize and save the incoming data
        serializer = FourBoxSerializer(data=card_data_list, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print("Validation Errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Fetch and return all cards
        cards = FourBox.objects.all()
        serializer = FourBoxSerializer(cards, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
def header_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)
        print("Incoming Files:", request.FILES)

        # Organize the incoming data
        data = {
            "header_text": {
                "eng": request.data.get("headerTextEng", ""),
                "aze": request.data.get("headerTextAze", ""),
                "rus": request.data.get("headerTextRus", ""),
                "arab": request.data.get("headerTextArab", "")
            },
            "header_description": {
                "eng": request.data.get("headerDescriptionEng", ""),
                "aze": request.data.get("headerDescriptionAze", ""),
                "rus": request.data.get("headerDescriptionRus", ""),
                "arab": request.data.get("headerDescriptionArab", "")
            },
        }

        result = cloudinary.uploader.upload(
            request.FILES["header_photo"],
            folder="headers/",
            invalidate=True
        )
        data["header_photo"] = result["url"]
        print("Upload Result:", result)

        # Serialize and save the data
        serializer = HeaderSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print("Validation Errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Retrieve all Header records
        headers = Header.objects.all()
        serializer = HeaderSerializer(headers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@parser_classes([JSONParser])  # Accept JSON requests
def how_we_work_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)

        # Organize the input data into a single JSON structure
        data = {
            "header_text": {
                "eng": request.data.get("headerTextEng", ""),
                "aze": request.data.get("headerTextAze", ""),
                "rus": request.data.get("headerTextRus", ""),
                "arab": request.data.get("headerTextArab", "")
            }
        }

        serializer = HowWeWorkSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        how_we_work = HowWeWork.objects.all()
        serializer = HowWeWorkSerializer(how_we_work, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@parser_classes([JSONParser])  # Handle JSON data
def how_we_work_way_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)

        # Organize the incoming data into structured JSON
        data = {
            "head_text_one": {
                "eng": request.data.get("howOneHeadTextEng", ""),
                "aze": request.data.get("howOneHeadTextAze", ""),
                "rus": request.data.get("howOneHeadTextRus", ""),
                "arab": request.data.get("howOneHeadTextArab", "")
            },
            "description_text_one": {
                "eng": request.data.get("howOneDescriptionEng", ""),
                "aze": request.data.get("howOneDescriptionAze", ""),
                "rus": request.data.get("howOneDescriptionRus", ""),
                "arab": request.data.get("howOneDescriptionArab", "")
            },
            "head_text_two": {
                "eng": request.data.get("howTwoHeadTextEng", ""),
                "aze": request.data.get("howTwoHeadTextAze", ""),
                "rus": request.data.get("howTwoHeadTextRus", ""),
                "arab": request.data.get("howTwoHeadTextArab", "")
            },
            "description_text_two": {
                "eng": request.data.get("howTwoDescriptionEng", ""),
                "aze": request.data.get("howTwoDescriptionAze", ""),
                "rus": request.data.get("howTwoDescriptionRus", ""),
                "arab": request.data.get("howTwoDescriptionArab", "")
            },
            "head_text_three": {
                "eng": request.data.get("howThreeHeadTextEng", ""),
                "aze": request.data.get("howThreeHeadTextAze", ""),
                "rus": request.data.get("howThreeHeadTextRus", ""),
                "arab": request.data.get("howThreeHeadTextArab", "")
            },
            "description_text_three": {
                "eng": request.data.get("howThreeDescriptionEng", ""),
                "aze": request.data.get("howThreeDescriptionAze", ""),
                "rus": request.data.get("howThreeDescriptionRus", ""),
                "arab": request.data.get("howThreeDescriptionArab", "")
            }
        }

        # Serialize and save the data
        serializer = HowWeWorkWaySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Fetch all records
        data = HowWeWorkWay.objects.all()
        serializer = HowWeWorkWaySerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@parser_classes([JSONParser])  # Ensure JSON parsing for incoming requests
def meet_our_doctors_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)

        # Structure incoming data
        data = {
            "head_text": {
                "eng": request.data.get("MeetDoctorsTextEng", ""),
                "aze": request.data.get("MeetDoctorsTextAze", ""),
                "rus": request.data.get("MeetDoctorsTextRus", ""),
                "arab": request.data.get("MeetDoctorsTextArab", "")
            },
            "description_text": {
                "eng": request.data.get("MeetOurDoctorsDescriptionEng", ""),
                "aze": request.data.get("MeetOurDoctorsDescriptionAze", ""),
                "rus": request.data.get("MeetOurDoctorsDescriptionRus", ""),
                "arab": request.data.get("MeetOurDoctorsDescriptionArab", "")
            }
        }

        # Serialize and save data
        serializer = MeetOurDoctorsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Retrieve all records
        records = MeetOurDoctors.objects.all()
        serializer = MeetOurDoctorsSerializer(records, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@parser_classes([JSONParser])  # Ensure JSON parsing for incoming requests
def our_blog_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)

        # Structure the data for the serializer
        data = {
            "header_text": {
                "eng": request.data.get("headerTextEng", ""),
                "aze": request.data.get("headerTextAze", ""),
                "rus": request.data.get("headerTextRus", ""),
                "arab": request.data.get("headerTextArab", "")
            }
        }

        # Serialize and save the data
        serializer = OurBlogSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Retrieve all blog header records
        blogs = OurBlog.objects.all()
        serializer = OurBlogSerializer(blogs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@parser_classes([JSONParser])  # To parse JSON input data
def our_department_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)

        # Structure the data for the serializer
        data = {
            "head_text": {
                "eng": request.data.get("departmentHeadTextEng", ""),
                "aze": request.data.get("departmentHeadTextAze", ""),
                "rus": request.data.get("departmentHeadTextRus", ""),
                "arab": request.data.get("departmentHeadTextArab", "")
            },
            "description_text": {
                "eng": request.data.get("departmentDescriptionEng", ""),
                "aze": request.data.get("departmentDescriptionAze", ""),
                "rus": request.data.get("departmentDescriptionRus", ""),
                "arab": request.data.get("departmentDescriptionArab", "")
            }
        }

        # Serialize and save the data
        serializer = OurDepartmentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Retrieve all department records
        departments = OurDepartment.objects.all()
        serializer = OurDepartmentSerializer(departments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
def testimonials_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)
        print("Incoming Files:", request.FILES)

        # Prepare data for the serializer
        data = {
            "name": {
                "eng": request.data.get("testimonialsNameEng", ""),
                "aze": request.data.get("testimonialsNameAze", ""),
                "rus": request.data.get("testimonialsNameRus", ""),
                "arab": request.data.get("testimonialsNameArab", "")
            },
            "description": {
                "eng": request.data.get("testDescEng", ""),
                "aze": request.data.get("testDescAze", ""),
                "rus": request.data.get("testDescRus", ""),
                "arab": request.data.get("testDescArab", "")
            },
            "country": {
                "eng": request.data.get("testimonialsCountryEng", ""),
                "aze": request.data.get("testimonialsCountryAze", ""),
                "rus": request.data.get("testimonialsCountryRus", ""),
                "arab": request.data.get("testimonialsCountryArab", "")
            }
        }

        result = cloudinary.uploader.upload(
            request.FILES["profile_image"],
            folder="testimonials/profileFile",
            invalidate=True
            )
        data["profile_image"] = result["url"]

        result = cloudinary.uploader.upload(
            request.FILES["back_image"],
            folder="testimonials/backFile",
            invalidate=True
            )
        data["back_image"] = result["url"]
        print("Upload Result:", result)

        # Serialize and save the data
        serializer = TestimonialsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print("Validation Errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        testimonials = Testimonials.objects.all()
        serializer = TestimonialsSerializer(testimonials, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST', 'GET'])
def why_choose_us_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)  # Debugging purposes

        # Create a dictionary for structured data
        data = {
            "head_text": {
                "eng": request.data.get("headTextEng", ""),
                "aze": request.data.get("headTextAze", ""),
                "rus": request.data.get("headTextRus", ""),
                "arab": request.data.get("headTextArab", "")
            }
        }

        # Serialize the structured data
        serializer = WhyChooseUsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        records = WhyChooseUs.objects.all()
        serializer = WhyChooseUsSerializer(records, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import WhyChooseUsBoxSerializer
from .models import WhyChooseUsBox

@api_view(['POST', 'GET'])
def why_choose_us_box_view(request):
    if request.method == 'POST':
        print("Incoming Data:", request.data)
        print("Incoming Files:", request.FILES)

        # Parse and structure the data for the serializer
        data = {
            "cards": [
                {
                    "head_text": {
                        "eng": request.data.get("cardOneHeadTextEng", ""),
                        "aze": request.data.get("cardOneHeadTextAze", ""),
                        "rus": request.data.get("cardOneHeadTextRus", ""),
                        "arab": request.data.get("cardOneHeadTextArab", ""),
                    },
                    "description_text": {
                        "eng": request.data.get("cardOneDescTextEng", ""),
                        "aze": request.data.get("cardOneDescTextAze", ""),
                        "rus": request.data.get("cardOneDescTextRus", ""),
                        "arab": request.data.get("cardOneDescTextArab", ""),
                    },
                },
                {
                    "head_text": {
                        "eng": request.data.get("cardTwoHeadTextEng", ""),
                        "aze": request.data.get("cardTwoHeadTextAze", ""),
                        "rus": request.data.get("cardTwoHeadTextRus", ""),
                        "arab": request.data.get("cardTwoHeadTextArab", ""),
                    },
                    "description_text": {
                        "eng": request.data.get("cardTwoDescTextEng", ""),
                        "aze": request.data.get("cardTwoDescTextAze", ""),
                        "rus": request.data.get("cardTwoDescTextRus", ""),
                        "arab": request.data.get("cardTwoDescTextArab", ""),
                    },
                },
                {
                    "head_text": {
                        "eng": request.data.get("cardThreeHeadTextEng", ""),
                        "aze": request.data.get("cardThreeHeadTextAze", ""),
                        "rus": request.data.get("cardThreeHeadTextRus", ""),
                        "arab": request.data.get("cardThreeHeadTextArab", ""),
                    },
                    "description_text": {
                        "eng": request.data.get("cardThreeDescTextEng", ""),
                        "aze": request.data.get("cardThreeDescTextAze", ""),
                        "rus": request.data.get("cardThreeDescTextRus", ""),
                        "arab": request.data.get("cardThreeDescTextArab", ""),
                    },
                }
            ]
        }
        result = cloudinary.uploader.upload(
            request.FILES["back_image"],
            folder="why_back_image",
            invalidate=True
            )
        data["back_image"] = result["url"]

        result = cloudinary.uploader.upload(
            request.FILES["cardOneLogo"],
            folder="card_logo/one",
            invalidate=True
            )
        data["cards"][0]["logo"] = result["url"]

        result = cloudinary.uploader.upload(
            request.FILES["cardTwoLogo"],
            folder="card_logo/two",
            invalidate=True
            )
        data["cards"][1]["logo"] = result["url"]

        result = cloudinary.uploader.upload(
            request.FILES["cardThreeLogo"],
            folder="card_logo/three",
            invalidate=True
            )
        data["cards"][2]["logo"] = result["url"]




        # Serialize the data
        serializer = WhyChooseUsBoxSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        # Retrieve all records
        boxes = WhyChooseUsBox.objects.all()
        serializer = WhyChooseUsBoxSerializer(boxes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
