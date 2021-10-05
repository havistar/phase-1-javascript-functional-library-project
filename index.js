

function myEach(collection, callback) {
    let arr;
    if(collection instanceof Array) {
      arr = collection
    } else {
      arr = Object.values(collection)
    }
    arr.forEach(element => {
      callback(element)
    });
    return collection
  }

  function myMap(collection, callback) {
    let arr;
    if(collection instanceof Array) {
      arr = collection
    } else {
      arr = Object.values(collection)
    }
    let newArr = []
     arr.forEach(element => {
       newArr.push(callback(element))
    });
    return newArr
  }

  function myReduce(collection, callback, acc) {
    if(!acc) {
      acc = collection[0]
      collection = collection.slice(1)
    }
    
    for(let i = 0; i< collection.length; i++) {
      acc = callback(acc, collection[i], collection)
    }
    return acc

  }

  function myFind(collection, item) {
    if(!(collection instanceof Array)) {
      collection = Object.values(collection)
    }
    
    for(let i = 0; i< collection.length; i++) {
      if(item(collection[i])) {
        return collection[i]
      }
    }
    return undefined
  }

  function myFilter(collection, callback) {
    if(!(collection instanceof Array)) {
      collection = Object.values(collection)
    }
    let newArr = []
    for(let i = 0; i< collection.length; i++) {
      if(callback(collection[i])) {
        newArr.push(collection[i])
      }
    }
    return newArr
  }

  function mySize(collection) {
    if(!(collection instanceof Array)) {
      collection = Object.values(collection)
    }
    let counter = 0;
    collection.forEach(element => {
      counter += 1
    })
    return counter
  }

  function myFirst(collection, n=1) {
    let newArr = []
    for(let i =0; i< n; i++) {
      if(n > 1) {
        newArr.push(collection[i])

      } else {
        return collection[0]
      }
    }
    return newArr;
  }

  function myLast(collection, n=false) {
     
    if(n) {
      return collection.slice(collection.length - n)
    } else {
      return collection[collection.length-1]
    }
  }

  function myKeys(collection) {
      
    let key = []
    for(let k in collection) {
      key.push(k)
    }
    return key
  }

  function myValues(collection) {
    let values = [];
    for(let k in collection) {
      values.push(collection[k])
    }
    return values
  }