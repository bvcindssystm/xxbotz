//===================[ OWNER ]=====================\\
global.owner = [
  "6288804148639", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]

//===================[ FUNCTION LAIN NYA ]=====================\\
global.fotonya2 = "https://telegra.ph/file/c5eb1485207e04371bc19.jpg"
global.namastore = "Anggazyy Store"
global.nomorbot = "6281229672570"
global.wlcm = []
global.wlcmm = []
global.namabot2 = 'Devil Script 6.0'
global.limitawal = {
    premium: "Infinity",
    free: 20
}

//===================[ MESS ]=====================\\
global.mess = {
    success: 'Succesfully ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: 'Khusus developer atau owner bot.',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*Khusus developer atau user premium.*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})