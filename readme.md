- working
- low latency
issues:
1. can't lookup data by value. Can lookup by metadata, but then you have to manually set metadata first.
2. ratelimit per project per user (aka, service account)
    - per project (300 read/write per minute)
    - per user per project (60 read/write per minute)