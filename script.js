const btnSubmit = document.getElementById("btn-submit");
const input = document.getElementById("input");

const state = document.getElementById("state");
const street = document.getElementById("street");
const neibour = document.getElementById("neibour");
const city = document.getElementById("city");


btnSubmit.addEventListener("click",  async () => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${input.value}/json/`)
        response.json().then(data => {
            const {uf, logradouro, bairro, localidade} = data;
            state.innerText = uf;
            street.innerText = logradouro;
            neibour.innerText = bairro;
            city.innerText = localidade;

            input.value = "";
        })
    } catch (error) {
        alert(error);
    }

})