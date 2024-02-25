class Barang {
  constructor(nama, stok, price) {
    this.nama = nama;
    this.stok = stok;
    this.price = price;
  }
}

class DataBarang {
  constructor() {
    this.data = [
      new Barang("Sepatu", 20, 85000),
      new Barang("Kaos", 10, 55000),
      new Barang("Jaket", 6, 105000),
    ];
  }

  // Task Lihat Data
  lihatData = () => {
    if (this.data.length > 0) {
      let dataString = "";
      this.data.forEach((val, idx) => {
        dataString +=
          idx +
          1 +
          ". " +
          val.nama +
          ", stoknya : " +
          val.stok +
          ", " +
          val.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          }) +
          "\n";
      });
      alert("Daftar barang saat ini\n" + dataString);
    } else {
      alert("Tidak ada barang yang dapat dilihat");
    }
  };

  // Task Tambah Data
  tambahData = (barang, stok, price) => {
    if (barang && stok && price) {
      let dataLama = "";
      let newData = new Barang(barang, parseInt(stok), parseFloat(price));
      this.data.forEach((barang, idx) => {
        dataLama +=
          idx +
          1 +
          ". " +
          barang.nama +
          ", stoknya : " +
          barang.stok +
          ", " +
          barang.price.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
          }) +
          "\n";
      });
      this.data.push(newData);
      alert(
        "Penambahan data BERHASIL ✅: \n" +
          dataLama +
          this.data.length +
          ". " +
          newData.nama +
          ", stoknya : " +
          newData.stok +
          ", " +
          newData.price.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
          })
      );
    } else {
      alert("Data tidak lengkap! Operasi Dibatalkan");
    }
  };

  // Task Update
  updateData = () => {
    let updateChoice = prompt(
      "Pilih barang yang akan diubah : \n" +
        this.data
          .map(
            (item, index) =>
              `${index + 1}. ${item.nama}, stoknya : ${
                item.stok
              }, Rp. ${item.price
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`
          )
          .join("\n")
    );
    let indexToUpdate = parseInt(updateChoice);
    if (indexToUpdate >= 1 && indexToUpdate <= this.data.length) {
      let barangUpToDate = this.data[indexToUpdate - 1];
      let ubahChoice = prompt("A. Ubah nama\nB. Ubah stok\nC. Ubah harga");
      switch (ubahChoice.toUpperCase()) {
        case "A":
          let newNama = prompt("Masukkan nama baru : ");
          if (newNama) {
            barangUpToDate.nama = newNama;
          } else {
            alert("Nama barang tidak valid. Operasi dibatalkan!");
          }
          break;
        case "B":
          let newStok = prompt("Masukkan stok baru : ");
          if (!isNaN(newStok)) {
            barangUpToDate.stok = parseInt(newStok);
          } else {
            alert("Stok barang tidak valid. Operasi dibatalkan!");
          }
          break;
        case "C":
          let newPrice = prompt("Masukkan harga baru : ");
          if (!isNaN(newPrice)) {
            barangUpToDate.price = parseFloat(newPrice);
          } else {
            alert("Harga barang tidak valid. Operasi dibatalkan!");
          }
          break;
        default:
          alert("Pilihan tidak valid. Operasi dibatalkan!");
          return;
      }
      alert("Ubah Data BERHASIL ✅: \n" + this.getPrintData());
    }
  };
  // Task Print Updated Data
  getPrintData = () => {
    let printData = "";
    this.data.forEach((item, index) => {
      printData += `${index + 1}. ${item.nama}, stoknya : ${
        item.stok
      }, Rp. ${item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}\n`;
    });
    return printData;
  };

  // Task Delete Data
  hapusData = () => {
    let deleteChoice = prompt(
      "Pilih barang yang akan dihapus : \n" +
        this.data
          .map(
            (item, index) =>
              `${index + 1}. ${item.nama}, stoknya : ${
                item.stok
              }, Rp. ${item.price
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`
          )
          .join("\n")
    );
    let indexToDelete = parseInt(deleteChoice);
    if (indexToDelete >= 1 && indexToDelete <= this.data.length) {
      this.data.splice(indexToDelete - 1, 1);
      alert("Hapus data BERHASIL ✅: \n" + this.getPrintData());
    } else {
      alert("Pilihan tidak valid. Operasi dibatalkan!");
    }
  };
}
let dataBarang = new DataBarang();
manageData = () => {
  let playAgain = true;
  while (playAgain) {
    let action = prompt(
      "Mulai manage data:\nA. Lihat data\nB. Tambah data\nC. Update data\nD. Hapus data\nE. Exit"
    );
    switch (action) {
      case "A":
        dataBarang.lihatData();
        playAgain = confirm("Kembali ke menu?");
        break;
      case "B":
        let nama = prompt("Masukkan nama : ");
        let stok = prompt("Masukkan stok : ");
        let harga = prompt("Masukkan harga : ");

        dataBarang.tambahData(nama, stok, harga);
        playAgain = confirm("Kembali ke menu?");
        break;
      case "C":
        dataBarang.updateData(dataBarang.data);
        playAgain = confirm("Kembali ke menu?");
        break;
      case "D":
        dataBarang.hapusData(dataBarang.data);
        playAgain = confirm("Kembali ke menu?");
      default:
        break;
    }
  }
};
manageData();
