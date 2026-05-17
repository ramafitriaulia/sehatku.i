// detail1
// Tambah air minum
let jumlah = 6;

const jumlahAir = document.getElementById('jumlahAir');

document.querySelector('.tambah-btn')
.addEventListener('click', ()=>{

    if(jumlah < 8){
        jumlah++;
        jumlahAir.innerHTML = jumlah + "/8";
    }

});

// Reset progress
document.querySelector('.reset-btn')
.addEventListener('click', ()=>{

    jumlah = 0;
    jumlahAir.innerHTML = jumlah + "/8";

});

// Ambil element jumlah air
let jumlah = 6;

const jumlahAir = document.getElementById("jumlahAir");

// Tombol tambah
const tambahBtn = document.querySelector(".tambah-btn");

tambahBtn.addEventListener("click", ()=>{

    // maksimal 8
    if(jumlah < 8){

        jumlah++;

        jumlahAir.innerHTML = jumlah + "/8";

    }

});

// Tombol reset
const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", ()=>{

    jumlah = 0;

    jumlahAir.innerHTML = jumlah + "/8";

});

// detail2
document.addEventListener("DOMContentLoaded", loadData);

function addData() {
  const sleep = document.getElementById("sleepTime").value;
  const wake = document.getElementById("wakeTime").value;

  if (!sleep || !wake) {
    alert("Isi jam tidur dan bangun dulu!");
    return;
  }

  const data = { sleep, wake };
  localStorage.setItem("sleepData", JSON.stringify(data));

  loadData();
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("sleepData"));

  if (!data) {
    document.getElementById("hasil").innerHTML = "Belum ada data tidur.";
    return;
  }

  const jam = hitungDurasi(data.sleep, data.wake);

  let status = "";
  if (jam < 6) status = "😴 Kurang";
  else if (jam < 8) status = "🙂 Cukup";
  else if (jam <= 9) status = "😃 Ideal";
  else status = "⚠️ Terlalu lama";

  document.getElementById("hasil").innerHTML = `
    <b>Waktu tidur:</b> ${data.sleep}<br>
    <b>Waktu bangun:</b> ${data.wake}<br>
    <b>Total tidur:</b> ${jam.toFixed(1)} jam<br>
    <b>Status:</b> ${status}
  `;
}

function hitungDurasi(start, end) {
  let [h1, m1] = start.split(":").map(Number);
  let [h2, m2] = end.split(":").map(Number);

  let t1 = h1 * 60 + m1;
  let t2 = h2 * 60 + m2;

  if (t2 < t1) t2 += 24 * 60;

  return (t2 - t1) / 60;
}

function resetData() {
  localStorage.removeItem("sleepData");
  loadData()
}

// detail 3
document.addEventListener("DOMContentLoaded", loadData);

function addData() {
  const jenis = document.getElementById("jenis").value;
  const durasi = document.getElementById("durasi").value;
  const kalori = document.getElementById("kalori").value;

  if (!jenis || !durasi) {
    alert("Isi jenis olahraga dan durasi!");
    return;
  }

  const data = {
    jenis,
    durasi,
  };

  localStorage.setItem("olahragaData", JSON.stringify(data));

  loadData();
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("olahragaData"));

  if (!data) {
    document.getElementById("hasil").innerHTML = "Belum ada data olahraga.";
    return;
  }

  document.getElementById("hasil").innerHTML = `
    <b>Jenis:</b> ${data.jenis}<br>
    <b>Durasi:</b> ${data.durasi} menit<br>
  `;
}

function resetData() {
  localStorage.removeItem("olahragaData");
  loadData();
}

let aktivitasTerpilih = "";

function setAktivitas(nama) {
  aktivitasTerpilih = nama;
}

function addData() {
  const durasi = document.getElementById("durasi").value;

  if (!aktivitasTerpilih || !durasi) {
    alert("Pilih aktivitas dan isi durasi!");
    return;
  }

  const data = {
    jenis: aktivitasTerpilih,
    durasi
  };

  localStorage.setItem("olahragaData", JSON.stringify(data));
  loadData();
}

// detail4
document.addEventListener("DOMContentLoaded", function () {

  const labels = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  const durasi = [20, 30, 15, 40, 25, 35, 50];

  const kalori = [150, 250, 120, 300, 200, 280, 320];

  // GRAFIK DURASI
  const ctx1 = document.getElementById("chartDurasi");

  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Durasi Olahraga",
        data: durasi,
        backgroundColor: [
          "#10b981",
          "#34d399",
          "#6ee7b7",
          "#059669",
          "#047857",
          "#065f46",
          "#064e3b"
        ],
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // GRAFIK KALORI
  const ctx2 = document.getElementById("chartKalori");

  new Chart(ctx2, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Kalori Terbakar",
        data: kalori,
        borderColor: "#ffffff",
        backgroundColor: "#ffffff",
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

});