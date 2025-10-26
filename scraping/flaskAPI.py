from flask import Flask, request, jsonify

from geminiAPI import apiCall
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

# @app.route("/", methods=["GET"])
# def home():
#     return jsonify({"message": "Welcome to Healthinator API!"})

# @app.route("/status", methods=["GET"])
# def status():
#     return jsonify({"status": "ok", "app": "Healthinator"})

@app.route("/diagnose", methods=["POST"])
def diagnose():
    data = request.get_json()  # expects JSON input
    question = data.get("question")
    answer = data.get("answer")

    # return apiCall(f'''For the question
    #     '{question}' 
    #     and the answer was
    #     '{answer}'
    #     what should be the next question that I should be asking and give four options for that question as well
    #     Dont give lengthy options and question, keep them short sentenced,
    #     The options should be a form of multiple choice answers to be chosen, not descriptive,
    #     Only give the next question and the options as response in this format
    #      '{{"question":"QUESTION","options":["OPTION1","OPTION2","OPTION3","OPTION4"] }}' ''')
    return apiCall(f"""
        For the given question: '{question}'
        and its answer: '{answer}', generate the next relevant question.  
        Provide exactly four short, multiple-choice options (not descriptive).  
        Keep both the question and options concise and clear.  

        Respond strictly in this JSON format (nothing else):  
        {{"question":"QUESTION","options":["OPTION1","OPTION2","OPTION3","OPTION4"]}}
        """)



if __name__ == "__main__":
    app.run(debug=True, port=5000)