const HTTP_METHOD = {
  GET(token?: string) {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
    };
  },
  POST<TReq>(data: TReq, token?: string) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
  },
  PUT<TReq>(data: TReq, token?: string) {
    return {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
  },
  DELETE(token?: string) {
    return {
      method: "DELETE",
      headers: {
        Authorization: token || "",
      },
    };
  },
};

export { HTTP_METHOD };
