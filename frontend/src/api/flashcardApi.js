import axios from "axios";

const flashcardAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/flashcards"
});

export default flashcardAPI;