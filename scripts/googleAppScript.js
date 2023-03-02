function myFunction(e) {
  var answers = e.response.getItemResponses();
  var values = {
    email: answers[0].getResponse(),
    firstName: answers[1].getResponse(),
  };

  return UrlFetchApp.fetch(
    "https://mfj0zjjx8j.execute-api.eu-west-2.amazonaws.com/v1/forms",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      payload: JSON.stringify(values),
      muteHttpExceptions: true,
    }
  );
}
