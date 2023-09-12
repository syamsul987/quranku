function getSurat() {
  fetch('https://equran.id/api/surat')
    .then(response => response.json())
    .then(response => {
      let insurat = '';
      response.forEach(ns => {
        insurat += `
        <div class="card mb-4 card-surat card-hover" onclick=" location.href='baca-surat.html?nomorsurat=${ns.nomor}' ">
                <div class="card-body nama-ayat">
                  <h3 class="card-title">${ns.nomor}. ${ns.nama_latin}</h3>
                  <h3 class="mb-2 text-end">${ns.nama}</h3>
                  <p class="text-end">${ns.arti}</p>
                </div>
              </div>
      `;
      })
      document.querySelector('.card-dalam-surat').innerHTML = insurat;
    });
}

getSurat()


