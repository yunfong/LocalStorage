# LocalStorage
Web localStorage that supports expiration time, the API same as native localStorage.

Usage:

##### ## LocalStorage.setItem(key,data,expired)
> <b>expired</b>: the time to expired,unit of milliseconds. eg. expired=1000 * 10, means ten seconds later expires 

##### ## LocalStorage.getItem(key)
> return the data cached with **key** , if the data has expired, will return null
  
  
##### ## LocalStorage.removeItem(key)
> remove the data cached with **key** 
  
    
##### ## LocalStorage.keys()
> return all keys cached via LocalStorage
  
    
##### ## LocalStorage.clear()
> clear all data cached via LocalStorage
  
  
welcome to discuss！
  

  
  
