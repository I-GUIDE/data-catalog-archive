FROM python:3.11-slim

RUN pip install --upgrade pip

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt
COPY pydantic_schema.py .

CMD ["python3", "pydantic_schema.py"]