const request = indexedDB.open('instagram', 1)
request.onsuccess = () => {
  console.log('Success creating database')
}

request.onerror = () => {
  console.log('Error Occured')
}

export { request }