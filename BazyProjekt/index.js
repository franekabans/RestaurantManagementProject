const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const url = require('url')
const querystring = require('querystring');
const db = require('./queries.js')
const port = 8080	

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.static('./public'))


app.get('/kucharz', db.getKucharzs)
app.get('/kucharzid/', db.getKucharzById)
app.post('/createkucharz', db.createKucharz)

app.post('/putkucharz/', db.updateKucharz)
app.post('/deletekucharz/', db.deleteKucharz)
///////////////////////////////////////////////
app.get('/dostawca', db.getDostawca)
app.get('/dostawa', db.getDostawaById)
app.get('/dostawcaid/', db.getDostawcaById)

app.post('/createdostawca', db.createDostawca)
app.post('/createdostawa', db.createDostawa)

app.post('/deletedostawca', db.deleteDostawca)
app.post('/deletedostawa', db.deleteDostawa)

app.get('/kelner', db.getKelner)
app.get('/kelnerid/', db.getKelnerByName)
app.post('/createkelner', db.createKelner)

app.post('/putkelner/', db.updateKelner)
app.post('/deletekelner/', db.deleteKelner)

app.get('/klient', db.getKlient)
app.get('/klientid/', db.getKlientById)
app.post('/createklient', db.createKlient)

app.get('/zarobek', db.getZarobek)
app.get('/calkiemprzyjemnyzarobek', db.getCalkiemPrzyjemnyZarobek)


app.get('/zamowienieid', db.getZamowienieById)
app.post('/createzamowienie', db.createZamowienie)
app.post('/createposilkizamowienie', db.createPosilekZamowienie)
app.get('/skladnik', db.getSkladnik)
app.get('/skladnikid/', db.getSkladnikbyName)
app.post('/createskladnik', db.createSkladnik)
app.post('/deleteskladnik/', db.deleteSkladnik)
app.get('/posilki', db.getMenu)
app.get('/posilkiid/', db.getMenuById)
app.get('/posilkiwzamowieniach/', db.getPosilekZamowienie)
app.post('/createposilki', db.createMenu)
app.post('/putposilki/', db.updateMenu)
app.post('/deleteposilki/', db.deleteMenu)
/////////////////
app.get('/premium', db.getPremium)
app.get('/premiumid/', db.getPremiumById)
app.post('/createpremium', db.createPremium)
app.post('/deletepremium/', db.deletePremium)
//app.post('/createzamkli/', db.createZamKLi)
app.get('/zamkli', db.getZamKli)
app.post('createzamkli/', db.createZamKli)

app.get('/ilosc', db.getIlosc)
app.get('/najmniej', db.getNajmniej)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
