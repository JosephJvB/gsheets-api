1. Intro: I found this tweet
  1. Checked out the Google Sheets API on my own
    - https://docs.google.com/spreadsheets/d/1h_cKOqg5UIPg-Mfrqj4P0mzcnejTQIgkOJVvil-apgg/edit#gid=0
  2. Local code demo: add user row
  3. Local code demo: update user row
  4. Local code demo: delete user row
  5. Local code demo: rate limit error
  6. No easy row lookup by value eg `where email = @email`
    - https://stackoverflow.com/questions/49161249/google-sheets-api-how-to-find-a-row-by-value-and-update-its-content
    - get by hacky formula lookup
    - get my sheet metadata - which must be manually created

2. What the blog describes
  1. Low time/cost prototyping, no UI
  2. Gradual refactor once business case had been explored
  3. Result being a scaleable system

3. Recreating:
  1. Form to Sheet:
    - https://docs.google.com/forms/d/e/1FAIpQLSfq7ms0cLgq3f9NmP2BpzorowlR54ZOlj1n1q9CbXJ5il1Mew/viewform?usp=sf_link
  2. Lambda to Sheet:
    - `npm run sheetLambda`
  3. Don't like sheets as a solution
  4. Actually, the author himself said Sheets was chosen because of it's integration with Forms.

4. My proposal:
  1. Form to Lambda to ANY (DDB, SQL, S3)
    - https://eu-west-2.console.aws.amazon.com/dynamodbv2/home?region=eu-west-2#item-explorer?table=GoogleSheetsAPI&maximize=true
    - https://docs.google.com/forms/d/e/1FAIpQLScTJH2n-JQaGRqRsOKTpRr2Z58dBxdRdEkZNng5V5MmHuwpoQ/viewform
    - No UI method of capturing data from Google Form
    - Dev time ~1hr

5. Conclusion
  - Blog's goal was more about promoting the brand / success of the company
  - I wouldn't recommend Google Sheets unless you want a write-only, rate-limited CSV file
  - Google Forms is cool for UI prototyping, and extensible with AppScript allowing Http calls
