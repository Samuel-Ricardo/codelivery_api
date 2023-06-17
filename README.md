# Codelivery API

<p align="center"> 
  <a href="https://fullcycle.com.br/" target="_blank">
    <img width="auto" src="https://cdn.webo.digital/uploads/2022/09/Nestjs_hero1.png"/>
  </a> 
</p>

<h4 align="center" > 🚀 🟨 Full Cycle Event - 2023 🟨 🚀 </h4>

<h4 align="center">
  Application developed during a Programmer Event, the <a style="color: #8a4af3;" href="https://github.com/search?q=imers%C3%A3o%20full%20cycle&type=repositories" target="_blank">Full Cycle Immersion</a> promoted by <a style="color: #8a4af3;" href="https://fullcycle.com.br/" target="_blank">@FullCycleSchool</a>
</h4>

#

<p align="center">
  |&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#project">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#techs">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#app">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#run-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#author">Author</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

#

<br>

<p id="project"/>

<h2>  | :artificial_satellite: About:  </h2>

<p align="justify">
  This project is a application of a complete Full Cycle project, with amazing technologies like NextJS for front-end, NestJS for back-end, PostgreSQL database, GO Lang for microsservice, Docker & Kubernetes for devops, metrics with Elastic Search & Kibana, Message / Event Driven Architeture with Kafka and more.
</p>

<img src="https://github.com/Samuel-Ricardo/travel_simulator/raw/main/readme_files/techs.png"/> 

<p align="justify">
    The purpose of this Back-End is work as intermediator of front-end application and all travel related services and datas with Mongo Data Base, it will send request to start a travel and will monmitoring all data, handling and sending it back to fron-end as data stream, that will have the state and relevant informations about it.
</p>

<p align="justify">
    This application use NestJS to manage all infrastructure because it's very good for work with microsservices and make easly connections with technologies used on this full cycle project like Kafka and work good with serve sent events (Event Driven Architeture).
</p>

<p align="justify">
    I use Kubernetes that is a container orchestration system that can be used to deploy and manage containers. It is a way to manage the running containers of a system, and to let the system run in a container environment.
</p>

> <a href="https://samuel-ricardo.github.io/"> <img src="https://github.com/Samuel-Ricardo/travel_simulator/raw/main/readme_files/app_preview.png"> </a>

  <br>
  
- This Back-End is hosted on Google Cloud Platform - [GCP] With Kubernetes 
- Current Version: <b> 1.0.0 </b>

<br/>

- Front-End     : NextJS   | [ [repositories](https://github.com/Samuel-Ricardo/codelivery-site)  ] 
- microsservice : GO Lang  | [ [repositories](https://github.com/Samuel-Ricardo/travel_simulator/tree/main)  ]
- Back-End      : NestJS   | [ [repositories](https://github.com/Samuel-Ricardo/codelivery_api)  ]

#

<br>

<h2 id="techs">
  :building_construction: | Technologies and Concepts Studied:
</h2>

> <a href='https://nestjs.com/'> <img width="48px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg" /> </a>

- NestJS
- Websockets
- MongoDB
- SocketIO
- Typescript
- Mongoose
- JS
- Test
- Jest  
- Kafka
- Kubernetes
- Docker
- Perfomance
- Event Driven Architeture
- Scalability
- Real Time

> Among Others...

<br>

#

<h2 id="app">
  💻 | Application:
</h2>

<img src="https://github.com/Samuel-Ricardo/travel_simulator/raw/main/readme_files/scheme.png" />

- Front-End     : NextJS   | [ [repositories](https://github.com/Samuel-Ricardo/codelivery-site)  ] 
- Back-End      : NestJS   | [ [repositories](https://github.com/Samuel-Ricardo/codelivery_api)  ]
- microsservice : GO Lang  | [ [repositories](https://github.com/Samuel-Ricardo/travel_simulator/tree/main)  ]
- Devops        : Kafka | Elastic  - [ [repositories](https://github.com/Samuel-Ricardo/travel_simulator/tree/main)  ]

<br>

This application is hosted on Google Cloud Platform with Kubernetes - [GCP]

<br>

<p align="justify">
  In Resume this project have a Microsservice responsible to start and manage a travel returning the travel data in real time by streams, kafka recive this data and garant that all comunications between applications work together without data loses and with scalable Perfomance of Kafka platform.
</p>

<p>
    The Back-End send by kafka a event to microsservice that trigger a start of a route, after that, the route data like position and if is it finished are send to kafka, the back end listen the event by kafka and get data to handle it and send to front end, that render all date with the travel route and real time position, cleaning it when finished.
</p>

<p align="justify">
    All data is tracked and stored in Elastic Search with kafka intermediator that provide by your platform the Kibana that create amazing views to handle with Data Analytics building beautiful graphics for example.
</p>

#
   <p id="routes"/>
   
##  :construction: API Routes:  

 <h3><b> Base URL - http://localhost:3000 </b></h3>

</br>
   
- <b> Travel Routes - /routes </b>
   
<p>   - Get all Routes - GET - / </p>
<p>   - Start a travel - POST - /[id]/start </p>
   
#

#

<h2 id="run-project"> 
   👨‍💻 | How to use
</h2>

<br>

### Open your Git Terminal and clone this repository

```git
  $ git clone "git@github.com:Samuel-Ricardo/codelivery_api.git"
```

### Make Pull

```git
  $ git pull "git@github.com:Samuel-Ricardo/codelivery_api.git"
```

<br>

This application use `Docker` so you dont need to install and cofigurate anything other than docker on your machine.

> <a target="_blank" href="https://www.docker.com/"> <img width="48px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" /> </a>

<br>


Navigate to project folder ` $ cd ./codelivery_api/ ` and run it using ` docker-compose `


```bash

  # After setup docker environment just run this commmand on root project folder:

  $ docker-compose up --build   # For First Time run this command

  $ docker-compose up           # to run project


```

```bash

  #Apps Running on:

  $ API: http://localhost:3000

  $ Mongo: http://localhost:8081

  See more: ./codelivery_api/docker-compose.yaml

```

#

<br>

#

<h2 id="author">
  :octocat: | Author:  
</h2>

> <a target="_blank" href="https://www.linkedin.com/in/samuel-ricardo/"> <img width="350px" src="https://github.com/Samuel-Ricardo/bolao-da-copa/blob/main/readme_files/IMG_20220904_220148_188.jpg?raw=true"/> <br> <p> <b> - Samuel Ricardo</b> </p></a>

<h1>
  <a herf='https://github.com/Samuel-Ricardo'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=GITHUB'> 
  </a>
  
  <a herf='https://www.instagram.com/samuel_ricardo.ex/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel.ex&color=black&style=for-the-badge&logo=instagram'> 
  </a>
  
  <a herf='https://twitter.com/SamuelR84144340'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=twitter'> 
  </a>
  
   <a herf='https://www.linkedin.com/in/samuel-ricardo/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=LinkedIn'> 
  </a>
</h1>
