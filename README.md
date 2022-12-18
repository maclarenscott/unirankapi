# Unirank API

This api is used to retrieve canadian university program related stats and information in JSON format. Currently, it can be filtered by university and by a filter statistic.

The API is in /pages/api

# How to Use the Filter Endpoint

Use the following format to use the filter endpoint:

```/api/programs/filter/[filter]```

For example, to filter programs by competitive score:

/api/programs/filter/competitive_score

The `[filter]` parameter can be one of the following:

- name
- admission_average
- acceptance_rate
- applications
- enrolment
- competitive_score

The university can be any university in Canada.

## Ordering Results

You can specify the order of the results by using the `order` parameter. For example, to sort the results in ascending order by competitive score:

/api/programs/filter/competitive_score?order=asc

The `order` parameter can be one of the following:

- asc (ascending)
- desc (descending)

The default order is descending.

## Limiting Results

You can use the `limit` parameter to limit the number of results. For example, to limit the results to the top 10 programs by competitive score:

/api/programs/filter/competitive_score?limit=10

The `limit` parameter must be a positive integer. The default limit is 1000.
