FROM jenkins/jenkins:lts-jdk11
RUN pip install 
COPY . .
WORKDIR .
ADD app.py
CMD["python3","app.py"] 
