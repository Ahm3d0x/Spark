
from bardapi import Bard
from flask import Flask, request, jsonify
import subprocess
import json
import random

token = 'eAjHyObQrknThPllI8s-BhctlEAANJT6I4FfvAfUqhaB7nsQEvD-MMFCoUxS4-wbuxdWyA.'
bard = Bard(token=token)

# Specify the path to your JSON file
json_file_path = 'data.json'

def run_python_script():
    data = request.get_json()
    question = data.get('ask')

    # Dialogue Processing
    random_res = ''
    ask = question.lower()

    if "spark" in ask:
        ask = ask.split("spark")[1].strip()
        random_res = 'right here sir'
    elif "your creator" in ask:
        ask = ask.split("your creator")[1].strip()
        random_res = 'My creator is the genius engineer Ahmad Mohamed Attiya. He lives in Abo Shoqooq.'
    elif "your name" in ask:
        ask = ask.split("your name")[1].strip()
        random_res = """My name is Spark. \n\n
          I am a large language model from SPARK AI, trained on a massive dataset of text and code. I can generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way.\n\n 
          * I will generate different creative text formats of text content, like poems, code, scripts, musical pieces, email, letters, etc. I will try my best to fulfill all your requirements.\n
          Created by ENG Ahmed Mohamed Attia.
          """
    elif "your age" in ask:
        ask = ask.split("your age")[1].strip()
        random_res = "I started work in 2022-10"
    elif ask != '':
        result = bard.get_answer(ask)
        res = result['choices']
        random_num = random.randint(0, len(res) - 1)
        random_res = res[random_num]['content'][0]

    # Save the response to a JSON file
    data_to_export = {
        "spark": random_res
    }
    with open(json_file_path, 'w') as json_file:
        json.dump(data_to_export, json_file)

    # Run the Python script
    python_script = 'spark.py'
    subprocess.run(['python', python_script])

    # Read the response from the Python script
    with open(json_file_path, 'r') as json_file:
        response_data = json.load(json_file)

    return jsonify(response_data)


