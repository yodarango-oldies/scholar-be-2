const fullTime = () => {
  const today = Date.now();
  const month = new Date(today).getMonth();
  const day = new Date(today).getDay();
  const year = new Date(today).getFullYear();
  const hour = new Date(today).getHours();
  const minutes = new Date(today).getMinutes();
  const seconds = new Date(today).getSeconds();

  return `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;
};

module.exports = fullTime;
