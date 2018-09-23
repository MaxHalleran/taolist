# RESULTS FOR MOVIE TESTING
- PASS %72 36/50 
- FAIL %26 13/50
- OTHER %2 1/50 

- Result Parameters

- DEVCHECK
1. Requires dev attention for reasons other than pass/fail


- FAIL
1. CATEGORY 1 FAIL
  - ERROR, cause of error stated
2. CATEGORY 2 FAIL
  - Cause stated below results


- PASS
1. CATEGORY 1 PASS
  - A result is considered a category 1 pass if the following conditions are met
    * If the movie falls under other required categories it displays as both
    * The movie does not fall into other required categories and is correctly categorized as a movie
2. CATEGORY 1.5 PASS
  - The movie is corretly placed in its parents category but not movies
    * Parent Category for movies is Arts & Entertainment
  - The movie is corretly placed in its parent category but not movies, and it shows other required categories 
3. CATEGORY 2 PASS
  - There is an item in another required category of the same name and only the movie was posted.
    -Example.
    #####>>>>>The Treasure of the Sierra Madre----------------------------------------
    #####|| Name: /Arts & Entertainment, Confidence: 0.6200000047683716
    #####----ENDThe Treasure of the Sierra Madre-------------------------------------
4. CATEGORY 3 PASS
  - The Movie lookup results in one of the other required categories but not as a movie itself
    - Example. 
    #####>>>>>The Grapes of Wrath----------------------------------------
    #####|| Name: /Books & Literature/Literary Classics, Confidence: 0.8899999856948853
    #####----ENDThe Grapes of Wrath--------------------------------------



----

1.  ALL CATEGORY 1 FAILS
  - All category 1 fails were caused by the wikipedia url returning a disambiguation page
- title list for Readability (Full error log at bottom of page)

1. ERROR: Carol
2. ERROR: Psycho
3. ERROR: Ran
4. ERROR: Before Midnight
5. ERROR: Gone With The Wind
6. ERROR: Rosemary's Baby
7. ERROR: The Maltese Falcon
8. ERROR: Manchester by the Sea

2.  ALL CATEGORY 2 FAILS
>>>>>Moonlight----------------------------------------
### FAIL
|| Name: /Science/Astronomy, Confidence: 0.6899999976158142
####REASON
1. Targeted the Astronomy page on Moonlight
----ENDMoonlight-------------------------------------

>>>>>Casablanca----------------------------------------
###FAIL
#### REASON
1. Targeted the city in Morocco
----ENDCasablanca-------------------------------------

>>>>>Dunkirk----------------------------------------
###FAIL
|| Name: /Reference/Humanities/History, Confidence: 0.9800000190734863
|| Name: /Law & Government/Military, Confidence: 0.7300000190734863
#### REASON
1. Targeted WWII Battle of Dunkirk
----ENDDunkirk-------------------------------------

>>>>>Gravity----------------------------------------
### FAIL
|| Name: /Science/Physics, Confidence: 0.9800000190734863
|| Name: /Science/Astronomy, Confidence: 0.8999999761581421
#### REASON
1. Targeted the natural phenomenon
----ENDGravity-------------------------------------

>>>>>Boyhood----------------------------------------
## FAIL
## REASON
Disambiguation
----ENDBoyhood-------------------------------------

3. ALL PASSES: 36/50
  - DEVCHECK: 1/50
  - CATEGORY 1: 24/50
  - CATEGORY 2: 6/50
  - CATEGORY 3: 5/50
>>>>>Ratatouille----------------------------------------
### PASS--Category 3
|| Name: /Food & Drink/Cooking & Recipes, Confidence: 0.8299999833106995
----ENDRatatouille-------------------------------------

>>>>>The Manchurian Candidate----------------------------------------
### PASS--Category 1 
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9300000071525574
|| Name: /Books & Literature, Confidence: 0.7599999904632568
----ENDThe Manchurian Candidate-------------------------------------

>>>>>The Grapes of Wrath----------------------------------------
### PASS--Category 3 
|| Name: /Books & Literature/Literary Classics, Confidence: 0.8899999856948853
----ENDThe Grapes of Wrath-------------------------------------

>>>>>Mean Streets----------------------------------------
### PASS--Category 2
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9900000095367432
----ENDMean Streets-------------------------------------

>>>>>Hoop Dreams----------------------------------------
### PASS--Category 1 
|| Name: /Arts & Entertainment/Movies, Confidence: 0.7400000095367432
----ENDHoop Dreams-------------------------------------

>>>>>North by Northwest----------------------------------------
### PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9800000190734863
----ENDNorth by Northwest-------------------------------------

>>>>>The Treasure of the Sierra Madre----------------------------------------
### PASS--Category 1.5
|| Name: /Arts & Entertainment, Confidence: 0.6200000047683716
----ENDThe Treasure of the Sierra Madre-------------------------------------

>>>>>Beauty and the Beast----------------------------------------
### PASS--Category 3
|| Name: /Books & Literature/Literary Classics, Confidence: 0.8600000143051147
----ENDBeauty and the Beast-------------------------------------

>>>>>Snow White and the Seven Dwarfs----------------------------------------
### PASS--Category 1.5
|| Name: /Books & Literature, Confidence: 0.800000011920929
|| Name: /Reference/Humanities/Myth & Folklore, Confidence: 0.6200000047683716
|| Name: /Arts & Entertainment, Confidence: 0.6000000238418579
|| Name: /People & Society/Kids & Teens/Children's Interests, Confidence: 0.5400000214576721
|| Name: /Reference/Humanities/History, Confidence: 0.5
----ENDSnow White and the Seven Dwarfs-------------------------------------

>>>>>Faces Places----------------------------------------
### PASS--Category 3
|| Name: /Arts & Entertainment/Music & Audio, Confidence: 0.8799999952316284
----ENDFaces Places-------------------------------------

>>>>>The Man Who Shot Liberty Valance----------------------------------------
### PASS--Category 2
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9599999785423279
----ENDThe Man Who Shot Liberty Valance-------------------------------------

>>>>>Rear Window----------------------------------------
### PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.949999988079071
----ENDRear Window-------------------------------------

>>>>>WALL-E----------------------------------------
### PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9300000071525574
|| Name: /Arts & Entertainment/Comics & Animation, Confidence: 0.9100000262260437
----ENDWALL-E-------------------------------------

>>>>>I Am Not Your Negro----------------------------------------
### PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9599999785423279
----ENDI Am Not Your Negro-------------------------------------

>>>>>45 Years----------------------------------------
### PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.8799999952316284
----END45 Years-------------------------------------

>>>>>A Streetcar Named Desire----------------------------------------
## DEVCHECK
|| Name: /Arts & Entertainment/Performing Arts/Acting & Theater, Confidence: 0.6600000262260437
|| Name: /Arts & Entertainment/Movies, Confidence: 0.5699999928474426
----ENDA Streetcar Named Desire-------------------------------------

>>>>>My Left Foot----------------------------------------
## PASS--Category 2
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9399999976158142
----ENDMy Left Foot-------------------------------------

>>>>>12 Angry Men----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.7599999904632568
----END12 Angry Men-------------------------------------

>>>>>Pulp Fiction----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9900000095367432
----ENDPulp Fiction-------------------------------------

>>>>>Zero Dark Thirty----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.8999999761581421
----ENDZero Dark Thirty-------------------------------------

>>>>>Three Colors: Red----------------------------------------
## PASS--Category 1
|| Name: /People & Society, Confidence: 0.6100000143051147
|| Name: /Arts & Entertainment/Movies, Confidence: 0.6000000238418579
----ENDThree Colors: Red-------------------------------------

>>>>>Taxi Driver----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.8700000047683716
----ENDTaxi Driver-------------------------------------

>>>>>American Graffiti----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.949999988079071
----ENDAmerican Graffiti-------------------------------------

>>>>>4 Months, 3 Weeks and 2 Days----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.5199999809265137
----END4 Months, 3 Weeks and 2 Days-------------------------------------

>>>>>The Godfather----------------------------------------
## PASS--Category 2
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9900000095367432
----ENDThe Godfather-------------------------------------

>>>>>A Separation----------------------------------------
## PASS--Category 2
|| Name: /Arts & Entertainment/Movies, Confidence: 0.8799999952316284
|| Name: /News, Confidence: 0.5400000214576721
|| Name: /Arts & Entertainment/Celebrities & Entertainment News, Confidence: 0.5199999809265137
----ENDA Separation-------------------------------------

>>>>>Toy Story----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Comics & Animation, Confidence: 0.9900000095367432
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9900000095367432
|| Name: /People & Society/Kids & Teens/Children's Interests, Confidence: 0.7699999809265137
----ENDToy Story-------------------------------------

>>>>>Spirited Away----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Comics & Animation/Anime & Manga, Confidence: 0.7900000214576721
|| Name: /Arts & Entertainment/Movies, Confidence: 0.7099999785423279
----ENDSpirited Away-------------------------------------

>>>>>Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9599999785423279
|| Name: /Arts & Entertainment/Humor, Confidence: 0.550000011920929
----ENDDr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb-------------------------------------

>>>>>The Social Network----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9399999976158142
|| Name: /Arts & Entertainment/Entertainment Industry/Film & TV Industry, Confidence: 0.5799999833106995
----ENDThe Social Network-------------------------------------

>>>>>12 Years a Slave----------------------------------------
## PASS--Category 3
|| Name: /Books & Literature, Confidence: 0.7699999809265137
|| Name: /Reference, Confidence: 0.5099999904632568
----END12 Years a Slave-------------------------------------

>>>>>Some Like It Hot----------------------------------------
## PASS--Category 2
|| Name: /Arts & Entertainment/Movies, Confidence: 0.949999988079071
|| Name: /Arts & Entertainment/Humor, Confidence: 0.5299999713897705
----ENDSome Like It Hot-------------------------------------

>>>>>Pan's Labyrinth----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9700000286102295
----ENDPan's Labyrinth-------------------------------------

>>>>>All About Eve----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9800000190734863
----ENDAll About Eve-------------------------------------

>>>>>Singin' In The Rain----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9700000286102295
----ENDSingin' In The Rain-------------------------------------

>>>>>Citizen Kane----------------------------------------
## PASS--Category 1
|| Name: /Arts & Entertainment/Movies, Confidence: 0.9900000095367432
----ENDCitizen Kane-------------------------------------

## ERROR LOG
----
ERROR: Ran { Error: 3 INVALID_ARGUMENT: Invalid text content: too few tokens (words) to process.
    at Object.exports.createStatusError (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/common.js:87:15)
    at Object.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:1188:28)
    at InterceptingListener._callNext (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:564:42)
    at InterceptingListener.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:614:8)
    at callback (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:841:24)
  code: 3,
  metadata:
   Metadata {
     _internal_repr:
      { 'google.rpc.badrequest-bin': [Array],
        'grpc-status-details-bin': [Array] } },
  details: 'Invalid text content: too few tokens (words) to process.',
  note:
   'Exception occurred in retry method that was not classified as transient' }
ERROR: Psycho { Error: 3 INVALID_ARGUMENT: Invalid text content: too few tokens (words) to process.
    at Object.exports.createStatusError (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/common.js:87:15)
    at Object.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:1188:28)
    at InterceptingListener._callNext (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:564:42)
    at InterceptingListener.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:614:8)
    at callback (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:841:24)
  code: 3,
  metadata:
   Metadata {
     _internal_repr:
      { 'google.rpc.badrequest-bin': [Array],
        'grpc-status-details-bin': [Array] } },
  details: 'Invalid text content: too few tokens (words) to process.',
  note:
   'Exception occurred in retry method that was not classified as transient' }
ERROR: Carol { Error: 3 INVALID_ARGUMENT: Invalid text content: too few tokens (words) to process.
    at Object.exports.createStatusError (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/common.js:87:15)
    at Object.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:1188:28)
    at InterceptingListener._callNext (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:564:42)
    at InterceptingListener.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:614:8)
    at callback (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:841:24)
  code: 3,
  metadata:
   Metadata {
     _internal_repr:
      { 'google.rpc.badrequest-bin': [Array],
        'grpc-status-details-bin': [Array] } },
  details: 'Invalid text content: too few tokens (words) to process.',
  note:
   'Exception occurred in retry method that was not classified as transient' }
ERROR: Before Midnight { Error: 3 INVALID_ARGUMENT: Invalid text content: too few tokens (words) to process.
    at Object.exports.createStatusError (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/common.js:87:15)
    at Object.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:1188:28)
    at InterceptingListener._callNext (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:564:42)
    at InterceptingListener.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:614:8)
    at callback (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:841:24)
  code: 3,
  metadata:
   Metadata {
     _internal_repr:
      { 'google.rpc.badrequest-bin': [Array],
        'grpc-status-details-bin': [Array] } },
  details: 'Invalid text content: too few tokens (words) to process.',
  note:
   'Exception occurred in retry method that was not classified as transient' }
ERROR: Rosemary's Baby { Error: 3 INVALID_ARGUMENT: Invalid text content: too few tokens (words) to process.
    at Object.exports.createStatusError (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/common.js:87:15)
    at Object.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:1188:28)
    at InterceptingListener._callNext (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:564:42)
    at InterceptingListener.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:614:8)
    at callback (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:841:24)
  code: 3,
  metadata:
   Metadata {
     _internal_repr:
      { 'google.rpc.badrequest-bin': [Array],
        'grpc-status-details-bin': [Array] } },
  details: 'Invalid text content: too few tokens (words) to process.',
  note:
   'Exception occurred in retry method that was not classified as transient' }
ERROR: Manchester by the Sea { Error: 3 INVALID_ARGUMENT: Invalid text content: too few tokens (words) to process.
    at Object.exports.createStatusError (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/common.js:87:15)
    at Object.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:1188:28)
    at InterceptingListener._callNext (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:564:42)
    at InterceptingListener.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:614:8)
    at callback (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:841:24)
  code: 3,
  metadata:
   Metadata {
     _internal_repr:
      { 'google.rpc.badrequest-bin': [Array],
        'grpc-status-details-bin': [Array] } },
  details: 'Invalid text content: too few tokens (words) to process.',
  note:
   'Exception occurred in retry method that was not classified as transient' }
ERROR: Gone With The Wind { Error: 3 INVALID_ARGUMENT: Invalid text content: too few tokens (words) to process.
    at Object.exports.createStatusError (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/common.js:87:15)
    at Object.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:1188:28)
    at InterceptingListener._callNext (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:564:42)
    at InterceptingListener.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:614:8)
    at callback (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:841:24)
  code: 3,
  metadata:
   Metadata {
     _internal_repr:
      { 'google.rpc.badrequest-bin': [Array],
        'grpc-status-details-bin': [Array] } },
  details: 'Invalid text content: too few tokens (words) to process.',
  note:
   'Exception occurred in retry method that was not classified as transient' }
ERROR: The Maltese Falcon { Error: 3 INVALID_ARGUMENT: Invalid text content: too few tokens (words) to process.
    at Object.exports.createStatusError (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/common.js:87:15)
    at Object.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:1188:28)
    at InterceptingListener._callNext (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:564:42)
    at InterceptingListener.onReceiveStatus (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:614:8)
    at callback (/Users/alexbuck/Documents/GitHub/midtermgit/node_modules/grpc/src/client_interceptors.js:841:24)
  code: 3,
  metadata:
   Metadata {
     _internal_repr:
      { 'google.rpc.badrequest-bin': [Array],
        'grpc-status-details-bin': [Array] } },
  details: 'Invalid text content: too few tokens (words) to process.',
  note:
   'Exception occurred in retry method that was not classified as transient' }

----