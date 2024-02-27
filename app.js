let btn = document.querySelector("button");
let input = document.querySelector("input");
let con = document.querySelector(".container");
btn.addEventListener("click", async () => {
    con.innerHTML = "";
    let valueGet = input.value;
    let url = `https://api.github.com/users/${valueGet}`;
    await fetchData(url);
    input.value = ""
});
async function fetchData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        let img = document.createElement("img");
        img.setAttribute("src", data.avatar_url);
        con.appendChild(img);
        let link = document.createElement("a")
        link.href = `${data.html_url}`
        link.target = "-blank"
        link.innerHTML = "click here to visit"
        con.innerHTML += `
        <h4>${data.login}</h4>
        <span><b>followers</b> : ${data.followers}</span>
        <span><b>following</b> : ${data.following}</span>
        <p><b>public_gists</b> : ${data.public_gists}</p> 
        <p><b>public_repos</b> : ${data.public_repos}</p>
        `;
        con.appendChild(link)
    } catch (err) {
        console.error("error is : ", err);
    }
}