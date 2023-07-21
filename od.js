const axios = require('axios');

async function getDetail(q) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://memes.zasxcarq.repl.co/detail?url=${q}`)
      .then((data) => {
        data = JSON.parse(data);
        const listEpsE = data.listEps;
        const listEps = listEpsE.map((eps) => ({
          nama: eps.nama,
          link: eps.link,
        }));
        const hasil = {
          judul: data.judul,
          jepang: data.japanese,
          skor: data.skor,
          produser: data.produser,
          tipe: data.tipe,
          status: data.status,
          totalEps: data.totalEps,
          durasi: data.durasi,
          tglRls: data.tglRls,
          studio: data.studio,
          genre: data.genre,
          sinopsis: data.sinopsis,
          thumb: data.thumb,
          listEps: listEps,
        };
        resolve(hasil);
      })
      .catch(reject);
  });
}

module.exports.getDetail = getDetail;
