### HydroShare Schema Conversion

1. `cp .env.template .env`
2. Add a username/password to the new .env file
3. `docker-compose build`
4. `docker-compose up`
5. In a browser go to `http://localhost:8000/resource/{resource_id}`
6. Aggregation metadata is listed in the associatedMedia property (if there are aggregations).  It takes hydroshare a few seconds to serve the resource/aggregation metadata so if a resource has several aggregations it takes awhile to retrieve everything.
7. Swagger documentation is at `http://localhost:8000/docs`
