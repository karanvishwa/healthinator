import string
import google.genai as genai
import json
import re

# The SDK automatically uses the API key from the environment variable.
# However, you can also configure it directly in your code like this:

client = genai.Client(api_key="AIzaSyBgpv01lCFha1racLAuBa8JSzv8kVfvD6E")

# Define the model to use
# Define the model name
model = "gemini-2.5-flash"

# Generate response (call generate_content directly from client.models)

def apiCall(data:string):
    response = client.models.generate_content(
        model=model,
        contents=data
    )
    print(response.text)

    refined = re.search(r"\{.*?\}", response.text, re.S)

    print(f"response after refingin is {refined.group(0)}")

    data = json.loads(refined.group(0))
    print(f"The question data is {data["question"]}")
    print(f"The question data is {data["options"]}")

    return data



# apiCall('''For the question
#         'What is the condition of your hairfall currently ?' 
#         and the answer was
#         'Have too much hairfall'
#         what should be the next question that I should be asking and give four options for that question as well,
#         The options should be a form of multiple choice answers to be chosen, not descriptive,
#         Dont give lengthy options and question, keep them short sentenced,
#         Only give the next question and the options as response in this format
#         '{"question":"QUESTION","options":["OPTION1","OPTION2","OPTION3","OPTION4"] }' ''')