## Importance of reformatting the data from the Useless fun facts API
Before sending it to your client, it is important to reformat as external third party API's often return a lot extra metadata that the frontend client doesn't need. Stipping away away this clutter reduces payload size and decouples your frontend from the external API's internal data structure. If the API's schema is changed anytime, only server side re-formatting needs to be updated. 
Benefits of a clean and minimal respose:
1. Bandwidth and speed: smaller JSON payloads travel fatser and improves performance.
2. Simplicity: It keeps frontend code clean and predictable because developers only work with the exact properties they want.
3. Security: It prevents accidentally leaking sensitive internal server properties.

## Sending a generic error message instead of actual error object from Axios
Simple error message is better for user understanding instead of getting code-heavy JSON. 

## To get a fact in a different language if the external API supported it
Allow the user to specify a language via query parameters. 