async function getIsiDoa() {
    const url = await fetch('https://islamic-api-zhirrr.vercel.app/api/doaharian')
    const { data } = await url.json()

    let doa = '';
    data.forEach(e => {
        doa += `
            <div class="card mt-4">
                <div class="card-body">
                    <h4 class="mb-4">${e.title}</h4>
                    <h2 class="text-end mb-4">${e.arabic}</h2>
                    <h5>l${e.latin}</h5>
                    <p>${e.translation}</p>
                </div>
            </div>
        `;
    });
    document.querySelector('.doa-card').innerHTML = doa ;
}

getIsiDoa()