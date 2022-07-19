export const storeData = (storageKey, value) => {
  try {
    // const jsonValue = JSON.stringify(value);
    const jsonValue = value;
    localStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    alert('Gagal menyimpan di localstorage');
  }
};

export const getData = (storageKey) => {
  try {
    const jsonValue = localStorage.getItem(storageKey);
    return jsonValue == null ? null : jsonValue;
    // return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert('Gagal mengambil data dari localstorage');
  }
};