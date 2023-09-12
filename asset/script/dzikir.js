async function getDzikir() {
    const url = await fetch('https://api.dikiotang.com/dzikir/pagi')
    const { data } = await url.json()

    let dzikir = '';
    data.forEach(e => {
        dzikir += `
        <div class="card mb-4">
            <div class="card-body">
                <h2 class="mb-5 text-end">${e.arab}</h2>
                <p class="mb-2">${e.indo}</p>
                <p class="mb-2">${e.type}</p>
                <p class="mb-2">${e.ulang}</p>
            </div>
        </div>
        `;
    });
    document.querySelector('.card-dzikir').innerHTML = dzikir; 
}

getDzikir()