export const mailRegex = (address: string) => {
  const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  if (regex.test(address)) {
    // 正規表現に当てはまれば（通れば）true
    return true;
  }
  return false;
}