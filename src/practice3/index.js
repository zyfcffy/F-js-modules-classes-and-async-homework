export const getPoetry = async() => {
    return fetch("https://v1.jinrishici.com/all.json")
    .then((res) => {
        return res.json();
    }).then((data) => {
        return [data.origin, data.author, data.content]
    }).catch((err) =>{
        console.log(err);
    })
}