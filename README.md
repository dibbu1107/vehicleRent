# vehicleRent
vehicle rental app

Step 1 : npm i
Step 2 : npm run migrate
step 3 : npm run start


```
curl --location 'localhost:6000/vehicle/model/2/bike'

```

``
curl --location 'localhost:6000/vehicle/wheels'

``

``
curl --location 'localhost:6000/vehicle/type/2'

``

``
curl --location 'localhost:6000/vehicle/booking' \
--header 'Content-Type: application/json' \
--data '{
    "vehicleId":"64540aaa7433067d2123d0b5",
    "firstName":"qwert",
    "lastName":"poiuyt",
    "startDate":"2023-05-20",
    "endDate":"2023-05-22"
}'

``

``
curl --location 'localhost:6000/vehicle/booking/645415c8aaa233e7870ff0a5'

``
