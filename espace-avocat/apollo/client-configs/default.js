export default function(context) {
  return {
    httpEndpoint: process.env.API_GATEWAY_ENDPOINT,
    httpLinkOptions: {
      headers: {
        authorization: process.browser ? localStorage.getItem(process.env.LOCALSTORAGE_AUTH_TOKEN) || "" : null,
      }
    }
  };
}
