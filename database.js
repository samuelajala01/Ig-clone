const request = indexedDB.open('instagram', 4)

request.onsuccess = () => {
  const database= request.result
  console.log('Success creating database')
  console.log(request)
}

request.onupgradeneeded = () => {
  const database = request.result
  database.createObjectStore('bio', { autoIncrement: true })
  database.createObjectStore('gallery', { autoIncrement: true })
}

request.onerror = () => {
  console.log('Error Occured')
}

const addEntryToDB = (storeName, entry) => {
  const database = request.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.add(entry)
}



export { request, addEntryToDB }

















