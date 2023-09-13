function getURL(e) {
    const pageURL = window.location.search.substring(1);
    const urlVariable = pageURL.split('&');

    for (let i = 0; i < urlVariable.length; i++) {
        const parameterName = urlVariable[i].split('=');
        if (parameterName[0] === e) {
            return parameterName[1];
        }
    }
}

const nomorsurat = getURL('nomorsurat');

function getSurat() {
    fetch(`https://equran.id/api/surat/${nomorsurat}`)
        .then(response => response.json())
        .then(response => {

            // title surat

            const titleSurat = document.querySelector('#title-surat');
            titleSurat.textContent = `Surat ${response.nama_latin}`;

            // info surat
            const judulSurat = document.querySelector('.judul-surat');
            const infoSurat = `
            <strong>${response.nama_latin} - ${response.nama} </strong>
            <p>jumlah ayat: ${response.jumlah_ayat} (${response.arti})</p>
            <button class="btn btn-primary mt-2 audio play" id="btn-play"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>play</button>

              <button class="btn btn-primary mt-2 audio-pause" id="btn-pause"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
            </svg>pause</button>
              <audio id="audio-teg" src="${response.audio}"></audio>
            `;
            judulSurat.innerHTML = infoSurat;

            // isi surat

            const surat = response.ayat;
            let isiSurat = ''
            surat.forEach(nr => {
                isiSurat += `
                <div class="card mt-5 mb-4 mx-1">
                    <div class="card-body"
                        <p>${nr.nomor}</p>
                        <h3 class=" mb-4 text-end">${nr.ar}</h3>
                        <p class="text-end mb-4">${nr.tr}</p>
                        <p>${nr.idn}</p>
                    </div>
                </div>
                `;

                const cardBoxSurat = document.querySelector('.card-box-surat');

                cardBoxSurat.innerHTML = isiSurat;
            })

            // audio play pause
            const btnPlay = document.querySelector('#btn-play');
            const btnPause = document.querySelector('#btn-pause');

            const audioSurat = document.querySelector('#audio-teg');

            // play 

            btnPlay.addEventListener('click', () => {
                btnPlay.style.display = 'none';
                btnPause.style.display = 'flex';
                audioSurat.play();
            });

            // pause
            btnPause.addEventListener('click', () => {

                btnPlay.style.display = 'flex';
                btnPause.style.display = 'none';
                audioSurat.pause();
            });
        })
}

getSurat()