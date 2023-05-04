FROM python:3.10-slim

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

WORKDIR /submissions

EXPOSE 5002

ENV PYTHONPATH "${PYTHONPATH}:/submissions"

CMD ["python", "main.py"]