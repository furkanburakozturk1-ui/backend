const database = 'mekanbul';
use(database);
db.venues.insertOne(
{
  "name": "Cam Kafe",
  "address": "SDÜ",
  "rating": 5,
  "foodanddrink": [
    "tost",
    "çay",
    "kahve",
    "bisküvi"
  ],
  "coordinates": [
    37.76440123987801,
    30.55200587463379
  ],
  "hours": [
    {
      "days": "Pazartesi-Cuma",
      "open": "9:00",
      "close": "18:00",
      "isClosed": false
    }
  ]
}
 );

 db.venues.insertOne(
{
  "name": "Yunus Usta",
  "address": "Çünür",
  "rating": 5,
  "foodanddrink": [
    "döner",
    "patates kızartması",
    "ayran"
  ],
  "coordinates": [
    37.8315,
    30.5235
  ],
  "hours": [
    {
      "days": "Pazartesi-Cuma",
      "open": "10:00",
      "close": "01:00",
      "isClosed": false
    }
  ]
}
    );
 db.venues.insertOne(
  { 
  "name": "Ferah Kebap",
  "address": "Çarşı",
  "rating": 3,
  "foodanddrink": [
    "lahmacun",
    "pide",
    "ayran"
  ],
  "coordinates": [
    37.8317,
    30.5237
  ],
  "hours": [
    {
      "days": "Pazartesi-pazar",
      "open": "11:00",
      "close": "23:00",
      "isClosed": false
    }
  ]
}
    );

 db.venues.insertOne(
{
  "name": "Viola Kafe",
  "address": "Iyaş",
  "rating": 1,
  "foodanddrink": [
    "waffle",
    "dondurma",
    "kahve"
  ],
  "coordinates": [
    37.8319,
    30.5239
  ],
  "hours": [
    {
      "days": "Salı-Pazar",
      "open": "10:00",
      "close": "01:00",
      "isClosed": false
    }
  ]
}
    ); 

 db.venues.insertOne(
{
  "name": "Burç Fırın",
  "address": "Iyaş",
  "rating": 5,
  "foodanddrink": [
    "tulumba",
    "baklava",
    "sütlaç",
    "kazandibi"
  ],
  "coordinates": [
    37.8321,
    30.5241
  ],
  "hours": [
    {
      "days": "Pazartesi-Cuma",
      "open": "09:00",
      "close": "23:00",
      "isClosed": false
    }
  ]
}
 );