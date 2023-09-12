async function asmaul() {
  const url = await fetch('https://asmaul-husna-api.vercel.app/api/all')
  const { data } = await url.json()

  let asmaulHusna = '';
  data.forEach(e => {
    asmaulHusna += `
    <div class="card mb-4 text-center">
      <div class="card-body">
        <p class="text-start">${e.urutan}</p>
        <h2 class="mb-4">${e.arab}</h2>
        <h5>${e.latin}</h5>
        <p>${e.arti}</p>
      </div>
    </div>
    `;
  })
  document.querySelector('.asmaul-husna').innerHTML = asmaulHusna;
}

asmaul()