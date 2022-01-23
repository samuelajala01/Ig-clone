const request = indexedDB.open('instagram', 4)

request.onsuccess = () => {
  const database= request.result
  console.log('Success creating or accessing database')
  console.log(request)

  const transaction= database.transaction(['bio'], 'readwrite')
  const store= transaction.objectStore('bio')
  store.add({name: 'Jane Butters',description: `Hey, I'm Jane!`})
}

request.onupgradeneeded = () => {
  const database= request.result
  database.createObjectStore('bio',{autoIncrement: true})
  database.createObjectStore('gallery', {autoIncrement: true})
}

request.onerror = () => {
  console.log('Error Creating or accessing db')
}

export { request }

