from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def submit_answers(request):
    if request.method == 'POST':
        answers = request.data.get('answers', [])
        # Here you can process the answers, save them to the database, etc.
        return Response({'message': 'Answers received!'}, status=status.HTTP_201_CREATED)
    return Response({'error': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)