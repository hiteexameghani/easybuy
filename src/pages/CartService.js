import firebase from "../firebase";

let db = firebase.ref("/ucart/cart");

class CartService {
  getAll() {
    return db;
  }

  create(cart,key) {
    db = firebase.ref(`/ucart/cart/${key}`);
    let data = db.set(cart);
    return data;
  }
  
  update(key, value) { 
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }
  deleteAll() {
    return db.remove();
  }
}

export default new CartService();