const Pool = require('pg').Pool
const pool = new Pool({
  host :'pascal',
  user: 'u6kramarczyk',
  password:'6kramarczyk',
  database: 'u6kramarczyk',
  port: 5432,
})

const getKucharzs = (request, response) => {
  pool.query('SELECT * FROM kucharz ;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getKucharzById = (request, response) => {
//  const id =request.query.idk // parseInt(request.params.id)
//	const id_kucharz = request.body
	const idk = parseInt(request.query.idk)
//	let idk = await Article.findAll().
  pool.query('SELECT * FROM kucharz WHERE id_kucharz = $1;', [idk], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createKucharz = (request, response) => {
  const  id  = request.body.id_kuc
  const name = request.body.imie_kuc
  const pensja = request.body.pensja_kuc

  pool.query('INSERT INTO kucharz (id_kucharz,imie_kucharz, pensja) VALUES ($1,$2,$3 );', [id,name,pensja], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Kucharz dodany`)
  })
}

const updateKucharz = (request, response) => {
  const id = parseInt(request.body.idkuc)
  const name = request.body.imiekuc
  const email = request.body.pensjakuc
  pool.query(
    'UPDATE kucharz SET imie_kucharz = $2, pensja = $3 WHERE id_kucharz = $1;',
    [id,name,email],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Kucharz uaktualniony z ID: ${id}`)
    }
  )
}

const deleteKucharz = (request, response) => {
  const id = parseInt(request.body.idkucc)

  pool.query('DELETE FROM kucharz WHERE id_kucharz = $1;', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Kucharz usuniety z ID: ${id}`)
  })
}

const getDostawca = (request, response) => {
  pool.query('SELECT * FROM dostawa ;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDostawcaById = (request, response) => {
//  const id =request.query.idk // parseInt(request.params.id)
//  const id_kucharz = request.body
  const idk = parseInt(request.query.idk)
//  let idk = await Article.findAll().
  pool.query('SELECT * FROM dostawca WHERE id_dostawca = $1;', [idk], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDostawaById = (request, response) => {
//  const id =request.query.idk // parseInt(request.params.id)
//  const id_kucharz = request.body
  const idk = parseInt(request.query.idk)
//  let idk = await Article.findAll().
  pool.query('SELECT * FROM dostawa WHERE id_dostaw = $1;', [idk], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createDostawca = (request, response) => {
  const  id  = request.body.id_pos
  const name = request.body.imie_pos

  pool.query('INSERT INTO dostawca (id_dostawca,imie_dostawca) VALUES ($1,$2);', [id,name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Dostawca dodany`)
  })
}

const createDostawa = (request, response) => {
  const  id  = request.body.id_pos
  const name = request.body.imie_pos
  const pensja = request.body.pensja_pos

  pool.query('INSERT INTO dostawa (id_dostaw,id_kli, czas_realizacji) VALUES ($1,$2,$3 );', [id,name,pensja], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Dostawa dodana`)
  })
}


const deleteDostawca = (request, response) => {
  const id = parseInt(request.body.idposilkii)

  pool.query('DELETE FROM dostawca WHERE id_dostawca = $1;', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Dostawa usunieta z ID: ${id}`)
  })
}

const deleteDostawa = (request, response) => {
  const id = parseInt(request.body.idposilkii)

  pool.query('DELETE FROM dostawa WHERE id_dostaw = $1;', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Dostawa usunieta z ID Dostawcy: ${id}`)
  })
}

const getKelner = (request, response) => {
  pool.query('SELECT * FROM kelner ;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getKelnerByName = (request, response) => {
//  const id =request.query.idk // parseInt(request.params.id)
//  const id_kucharz = request.body
  const idk = request.query.idk
//  let idk = await Article.findAll().
  pool.query('SELECT * FROM kelner WHERE imie_kelner = $1;', [idk], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createKelner = (request, response) => {
  const id  = request.body.idpos
  const name = request.body.imiepos
  

  pool.query('INSERT INTO kelner (id_kelner,imie_kelner) VALUES ($1,$2 );', [id,name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Kelner dodany`)
  })
}


const updateKelner = (request, response) => {
  const id = parseInt(request.body.idpos)
  const name = request.body.imiepos
 
  pool.query(
    'UPDATE kelner SET imie_kelner = $2 WHERE id_kelner = $1;',
    [id,name],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Kelner uaktualniony z ID: ${id}`)
    }
  )
}

const deleteKelner = (request, response) => {
  const id = parseInt(request.body.idposilkii)

  pool.query('DELETE FROM kelner WHERE id_kelner = $1;', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Kelner usuniety z ID: ${id}`)
  })
}


const getKlient = (request, response) => {
  pool.query('SELECT * FROM klient ;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getKlientById = (request, response) => {
//  const id =request.query.idk // parseInt(request.params.id)
//  const id_kucharz = request.body
  const idk = parseInt(request.query.idk)
//  let idk = await Article.findAll().
  pool.query('SELECT * FROM klient WHERE id_klient = $1;', [idk], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createKlient = (request, response) => {
  const id  = request.body.id_kli
  const ilosc = request.body.ilosc_kli
  const adres = request.body.adres_kli
  const tel = request.body.tel_kli
  const imie = request.body.imie_kli
  const naz = request.body.nazwisko_kli
  const pensja = request.body.pensja_ki

  pool.query('INSERT INTO klient (id_klient,ilosc_zamowien,adres,telefon,imie_klient,nazwisko_klient,sposob_platnosci) VALUES ($1,$2,$3,$4,$5,$6,$7);', [id,ilosc,adres,tel,imie,naz,pensja], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Klient dodany`)
  })
}



const getZarobek = (request, response) => {
  pool.query('SELECT * FROM zarobek ;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCalkiemPrzyjemnyZarobek = (request, response) => {
  pool.query('SELECT * from calkiem_przyjemny_zarobek;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}




const getZamowienieById = (request, response) => {
//  const id =request.query.idk // parseInt(request.params.id)
//  const id_kucharz = request.body
  const idk = parseInt(request.query.idk)
//  let idk = await Article.findAll().
  pool.query('SELECT * FROM zamowienie WHERE id_zamowienie = $1;', [idk], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}




const createZamowienie = (request, response) => {
  const id  = request.body.id_kuc
  const name = request.body.imie_kuc
  const pensja = request.body.pensja_kuc

  pool.query('INSERT INTO zamowienie (id_zamowienie,data_czas, suma_naleznosc) VALUES ($1,$2,$3 );', [id,name,pensja], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Zamowienie dodane`)
  })
}

const createPosilekZamowienie = (request, response) => {
  const id  = request.body.id_kuc
  const name = request.body.imie_kuc
  const pensja = request.body.pensja_kuc

  pool.query('INSERT INTO zamowienie_posilki (id_zamow,id_posi, ilosc) VALUES ($1,$2,$3 );', [id,name,pensja], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Dodano Posilek do Zamowienia z ID: ${id}`)
  })
}

const getSkladnik = (request, response) => {
  pool.query('SELECT * FROM skladnik ;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSkladnikbyName = (request, response) => {

  const idk = request.query.idk

  pool.query('SELECT * FROM skladnik WHERE nazwa_produktu = $1;', [idk], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createSkladnik = (request, response) => {
  const id  = request.body.id_kuc
  const name = request.body.imie_kuc
 

  pool.query('INSERT INTO skladnik (nazwa_produktu,opis) VALUES ($1,$2);', [id,name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Składnik Dodany`)
  })
}


const deleteSkladnik = (request, response) => {
  const id = request.body.idkucc

  pool.query('DELETE FROM skladnik WHERE nazwa_produktu = $1;', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`usunięty`)
  })
}

const getMenu = (request, response) => {
  pool.query('SELECT * FROM posilek ;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getMenuById = (request, response) => {
//  const id =request.query.idk // parseInt(request.params.id)
//  const id_kucharz = request.body
  const idk = parseInt(request.query.idk)
//  let idk = await Article.findAll().
  pool.query('SELECT * FROM posilek WHERE id_posilek = $1;', [idk], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPosilekZamowienie = (request, response) => {
  pool.query('SELECT * FROM zamowienie_posilki ;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createMenu = (request, response) => {
  const id  = parseInt(request.body.id_pos)
  const name = request.body.imie_pos
  const pensja = request.body.pensja_pos

  pool.query('INSERT INTO posilek (id_posilek,nazwa_dania,cena_dania) VALUES ($1,$2,$3);', [id,name,pensja], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Posiłek dodany`)
  })
}

const updateMenu = (request, response) => {
  const id = parseInt(request.body.idpos)
  const name = request.body.imiepos
  const email = request.body.pensjapos
  pool.query(
    'UPDATE posilek SET nazwa_dania = $2, cena_dania = $3 WHERE id_posilek = $1;',
    [id,name,email],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Posiłek uaktualniony z ID: ${id}`)
    }
  )
}

const deleteMenu = (request, response) => {
  const id = parseInt(request.body.idposilkii)

  pool.query('DELETE FROM posilek WHERE id_posilek = $1;', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Posiłek usuniety z ID: ${id}`)
  })
}


const getPremium = (request, response) => {
  pool.query('SELECT * FROM premium ;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPremiumById = (request, response) => {
//  const id =request.query.idk // parseInt(request.params.id)
//  const id_kucharz = request.body
  const idk = parseInt(request.query.idk)
//  let idk = await Article.findAll().
  pool.query('SELECT * FROM premium WHERE id_klient = $1;', [idk], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createPremium = (request, response) => {
  const  id  = request.body.id_kuc
  const name = request.body.imie_kuc
 
  pool.query('INSERT INTO premium (id_klient,znizka) VALUES ($1,$2);', [id,name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Nowy Klient Premium dodany`)
  })
}


const deletePremium = (request, response) => {
  const id = parseInt(request.body.idkucc)

  pool.query('DELETE FROM premium WHERE id_klient = $1;', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Klient Premium usuniety: ${id}`)
  })
}

const getZamKli = (request, response) => {
  pool.query('SELECT * FROM klient_zamowienie ;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createZamKli = (request, response) => {
  const  id  = request.body.id_kuc
  const name = request.body.imie_kuc
 
  pool.query('INSERT INTO klient_zamowienie (id_kli,id_zamow) VALUES ($1,$2);', [id,name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Dostawca dostanie informacje `)
  })
}


const getIlosc= (request, response) => {
  pool.query('SELECT * FROM ilosc_dostawcow;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getNajmniej = (request, response) => {
  pool.query('SELECT * FROM najmniejaaarabia;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


module.exports = {
  getKucharzs,
  getKucharzById,
  createKucharz,
  updateKucharz,
  deleteKucharz,
  getDostawca,
  getDostawaById,
  getDostawcaById,
  createDostawca,
  createDostawa,
  deleteDostawca,
  deleteDostawa,
  getKelner,
  getKelnerByName,
  createKelner,
  updateKelner,
  deleteKelner,
  getKlient,
  getKlientById,
  createKlient,
  getZarobek,
  getCalkiemPrzyjemnyZarobek,
  getZamowienieById,
  createZamowienie,
  createPosilekZamowienie,
  getSkladnik,
  getSkladnikbyName,
  createSkladnik,
  deleteSkladnik,
  getMenu,
  getMenuById,
  getPosilekZamowienie,
  createMenu,
  updateMenu,
  deleteMenu,
  getPremium,
  getPremiumById,
  createPremium,
  deletePremium,
  getZamKli,
  createZamKli,
  getNajmniej,
  getIlosc,

}



