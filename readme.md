- working
- low latency
issues:
1. can't lookup data by value. Can lookup by metadata, but then you have to manually set metadata first.
2. ratelimit per project per user (aka, service account)
    - per project (300 read/write per minute)
    - per user per project (60 read/write per minute)

form link
https://docs.google.com/forms/d/e/1FAIpQLSf9tARRwMjd__3wnDxT0aPk6UKHzhszUUzAmbd26PE1N_b5Lw/viewform?usp=sf_link

. form to sheets
. local to sheets
. lambda to sheets
. form to lambda to ddb
