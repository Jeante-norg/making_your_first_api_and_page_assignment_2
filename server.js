import express from "express";
const app = express();

app.get("/status-info", (req, res) => {
  let code = req.query.code;
  if (code == 200) {
    let obj = {
      status: "200 OK",
      message:
        "the request was successful, and the server responded with the requested data.",
    };
    return res.send(obj);
  } else if (code == 201) {
    let obj = {
      status: "201 Created",
      message:
        "The request was successful, and the server created a new resource.",
    };
    return res.send(obj);
  } else if (code == 204) {
    let obj = {
      status: "204 No Content",
      message:
        "The server successfully processed the request, but there is no content to return in the response.",
    };
    return res.send(obj);
  } else if (code == 400) {
    let obj = {
      status: "400 Bad Request",
      message:
        "The server cannot or will not process the request due to something perceived as a client error, such as malformed syntax or invalid input.",
    };
    return res.send(obj);
  } else if (code == 401) {
    let obj = {
      status: "401 Unauthorized",
      message:
        "The request requires user authentication. The client must include valid authentication credentials to access the resource.",
    };
    return res.send(obj);
  } else if (code == 403) {
    let obj = {
      status: "403 Forbidden",
      message:
        "The server understands the request but refuses to authorize it. The client does not have permission to access the resource.",
    };
    return res.send(obj);
  } else if (code == 404) {
    let obj = {
      status: "404 Not Found",
      message:
        "The requested resource could not be found on the server. This is often due to an incorrect URL.",
    };
    return res.send(obj);
  } else if (code == 405) {
    let obj = {
      status: "405 Not Allowed",
      message:
        "Method Not Allowed: The request method is known by the server but is not supported for the target resource.",
    };
    return res.send(obj);
  } else if (code == 429) {
    let obj = {
      status: "429 Too Many Requests",
      message:
        "The client has sent too many requests in a given amount of time (rate-limiting).",
    };
    return res.send(obj);
  } else if (code == 500) {
    let obj = {
      status: "500 Internal Server Error",
      message:
        "The server encountered an unexpected condition that prevented it from fulfilling the request.",
    };
    return res.send(obj);
  } else if (code == 502) {
    let obj = {
      status: "502 Bad Gateway",
      message:
        "The server, acting as a gateway or proxy, received an invalid response from the upstream server.",
    };
    return res.send(obj);
  } else if (code == 503) {
    let obj = {
      status: "503 Service Unavailable",
      message:
        "The server is currently unable to handle the request due to temporary overload or maintenance.",
    };
    return res.send(obj);
  } else if (code == 504) {
    let obj = {
      status: "504 Gateway Timeout",
      message:
        "The server, acting as a gateway or proxy, did not receive a timely response from the upstream server.",
    };
    return res.send(obj);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});
