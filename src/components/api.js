let api = "https://reaganogrady-imagequiz.herokuapp.com";

let flowers = () => {
    return fetch(api + "/flowers")
    .then(response => response.json());
};


let quizzes = () => {
    return fetch(api + "/quizzes")
    .then(response => response.json());
};

export default api;