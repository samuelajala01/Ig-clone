const request = indexedDB.open('instagram', 4)

request.onsuccess = () => {
  const database= request.result
  console.log('Success creating or accessing database')
  console.log(request)
}

request.onupgradeneeded = () => {
  const database= request.result
  database.createObjectStore('bio',{autoIncrement: true})
  database.createObjectStore('gallery', {autoIncrement: true})
}

request.onerror = () => {
  console.log('Error Creating or accessing db')
}

const addEntryToDb = (storeName, entry) => {
  const database = request.result
  const transaction= database.transaction([storeName], 'readwrite')
  const store= transaction.objectStore([storeName])
  store.add(entry)

  transaction.oncomplete =() => alert(`Entry added to ${storeName}`)
  transaction.onerror = (event) => {
    console.log(`Error adding entry to ${storeName}`)
    console.log(event.target.error)
  }
}

const getEntryFromDb = async (storeName, id) => {
  const data = new Promise((resolve, reject) => {
    const database = request.result
    const transaction = database.transaction([storeName])
    const store = transaction.objectStore(storeName)
    const getData = id ?  store.get(id) : store.getAll()
  
   getData.onsuccess = () =>{
      console.log('success', getData.result)
      resolve(getData.result)
    }
  
    getData.onerror = () =>{
      console.log('Error getting data from store')
      reject(getData.error)
    }
  })
  return Promise.resolve(data)
}

const clearAllEntries = (storeName) =>{
  const database = request.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.clear()
}


export { request, addEntryToDb, getEntryFromDb, clearAllEntries }

