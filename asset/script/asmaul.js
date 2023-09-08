function getNama() {
    fetch('https://equran.id/api/surat')
    .then(response => response.json())
    .then(response => {
      let nama = '';
      response.forEach( e => {
        nama += `
        <div class="card mb-4">
        <div class="card-body">
            <h2>${e.arab}</h2>
            <h5>arab</h5>
            <p>latin</p>
            <p>arti</p>
        </div>
    </div>
        `  
      });
        console.log(response)
  })
  }
  
  getNama()
// https://asmaul-husna-api.vercel.app/api/all