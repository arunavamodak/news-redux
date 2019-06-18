export const fetchNews = (a, changeCompState) => dispatch =>
  fetch(
    `https://newsapi.org/v2/top-headlines?source=google-news&country=${a}&apiKey=a9b320f1f47644f99dab6b9407db90b0`
  )
    .then(response => response.json())
    .then(json => {
      console.log("hehe", json);
      dispatch(changeNews(json));
      changeCompState();
    });

export const changeNews = response => {
  return {
    type: "CHANGE_NEWS",
    payload: response
  };
};
