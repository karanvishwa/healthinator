import axios from "axios"

const root_url = "http://127.0.0.1:5000"

export const HealthinatoAPI = {

    questionsAPI: (question:string,answer:string) => {
        const url = root_url + "/diagnose"
        const data ={
            question,
            answer
        }
        return axios.post(url,data)
    }

}