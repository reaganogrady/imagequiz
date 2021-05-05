let address = "https://reaganogrady-imagequiz.herokuapp.com";

let getFlowers = () => {
    return fetch(address + "/flowers")
    .then(response => response.json());
};

let getQuizzes = () => {
    return fetch(address + "/quizzes")
    .then(response => response.json());
};

let addScore = (score) => {
    return fetch(address + '/score', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(score)
    });
}

let api = {
    getQuizzes : getQuizzes,
    getFlowers : getFlowers,
    addScore : addScore
};

export default api;