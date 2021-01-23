---
title: 'Deploying machine learning models to AWS Lambda, with Connexion, Zappa and Docker.'
date: '2019-11-23'
---

Deploying machine learning models to AWS Lambda, with Connexion, Zappa and Docker.
alias micropyshell >> ~/.bash_profile
Run the command you just created. This will run the docker image with your AWS configuration on it. Inside this image, we will still our dependencies and deploy to Lambda with Zappa.
micropyshell
Now you should be inside the docker container shell.
micropyshell>
Let's create a virtual enviroment inside container.
virtualenv venv
source venv/bin/activate
Install any python package inside your docker containers.
pip install -r requirements.txt
Deploy your services to Lambda. After you press this here is what happens after the scenes.
From Zappa docs. Credit: https://github.com/Miserlou/Zappa
zappa deploy dev
After you should be given an API gateway URL like this
Troubleshooting
Not finding config file
botocore.exceptions.ProfileNotFound: The config profile (default) could not be found
Error 1. Profile not found.502. This could be an error when running your python program

Zappa tail to see your logs.
You can also see your logs in Cloudwatch by going to the API gateway.
500

"slim_handler": true,
"memory_size": 3008,
Problems with NLTK Library.

Solution: https://stackoverflow.com/questions/42382662/using-nltk-corpora-with-aws-lambda-functions-in-python
Create a Enviroment Variable in the Lambda Console.
You are using python 2.7 It won't work Check

python
Here's a weird one. Your package requires GPU
from thinc.neural.util import prefer_gpu, require_gpu
Answer: https://stackoverflow.com/questions/49186886/spacy-throws-oserror-when-deployed-to-aws-lambda-using-zappa

References
How to Deploy Deep Learning Models with AWS Lambda and Tensorflow | Amazon Web Services
Deep learning has revolutionized how we process and handle real-world data. There are many types of deep learning…aws.amazon.com
Setup your Environment - Guide to using Django with Zappa
 This section provides guidance to set up a zappa working environment. While the ultimate goal is to have your Django…romandc.com